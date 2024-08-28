import { Connection, PublicKey } from '@solana/web3.js';
import { bignum } from '@metaplex-foundation/beet';
import { publicKey as beetPublicKey } from '@metaplex-foundation/beet-solana';
import { marketInfoBeet, openOrderBeet } from './utils/beet';
import { FIXED_WRAPPER_HEADER_SIZE, NIL } from './constants';
import { OrderType } from './manifest';
import { deserializeRedBlackTree } from './utils/redBlackTree';

/**
 * All data stored on a wrapper account.
 */
export interface WrapperData {
  /** Public key for the trader that owns this wrapper. */
  trader: PublicKey;
  /** Array of market infos that have been parsed. */
  marketInfos: MarketInfoParsed[];
}

/**
 * Parsed market info on a wrapper. Accurate to the last sync.
 */
export interface MarketInfoParsed {
  /** Public key for market. */
  market: PublicKey;
  /** Base balance in atoms. */
  baseBalanceAtoms: bignum;
  /** Quote balance in atoms. */
  quoteBalanceAtoms: bignum;
  /** Open orders. */
  orders: OpenOrder[];
  /** Last update slot number. */
  lastUpdatedSlot: number;
}

/**
 * Raw market info on a wrapper.
 */
export interface MarketInfoRaw {
  market: PublicKey;
  openOrdersRootIndex: number;
  traderIndex: number;
  baseBalanceAtoms: bignum;
  quoteBalanceAtoms: bignum;
  lastUpdatedSlot: number;
  padding: number; // 4 bytes
}

/**
 * OpenOrder on a wrapper. Accurate as of the latest sync.
 */
export interface OpenOrder {
  /** Client order id used for cancelling orders. Does not need to be unique. */
  clientOrderId: bignum;
  /** Exchange defined id for an order. */
  orderSequenceNumber: bignum;
  /** Price as float in atoms of quote per atoms of base. */
  price: number;
  /** Number of base atoms in the order. */
  numBaseAtoms: bignum;
  /** Hint for the location of the order in the manifest dynamic data. */
  dataIndex: number;
  /** Last slot before this order is invalid and will be removed. */
  lastValidSlot: number;
  /** Boolean for whether this order is on the bid side. */
  isBid: boolean;
  /** Type of order (Limit, PostOnly, ...). */
  orderType: OrderType;
}

export interface OpenOrderInternal {
  clientOrderId: bignum;
  orderSequenceNumber: bignum;
  price: Uint8Array;
  numBaseAtoms: bignum;
  dataIndex: number;
  lastValidSlot: number;
  isBid: boolean;
  orderType: number;
  padding: bignum[]; // 22 bytes
}

/**
 * Wrapper object used for reading data from a wrapper for manifest markets.
 */
export class Wrapper {
  /** Public key for the market account. */
  address: PublicKey;
  /** Deserialized data. */
  private data: WrapperData;

  /**
   * Constructs a Wrapper object.
   *
   * @param address The `PublicKey` of the wrapper account
   * @param data Deserialized wrapper data
   */
  private constructor({
    address,
    data,
  }: {
    address: PublicKey;
    data: WrapperData;
  }) {
    this.address = address;
    this.data = data;
  }

  /**
   * Returns a `Wrapper` for a given address, a data buffer
   *
   * @param marketAddress The `PublicKey` of the wrapper account
   * @param buffer The buffer holding the wrapper account data
   */
  static loadFromBuffer({
    address,
    buffer,
  }: {
    address: PublicKey;
    buffer: Buffer;
  }): Wrapper {
    const wrapperData = Wrapper.deserializeWrapperBuffer(buffer);
    return new Wrapper({ address, data: wrapperData });
  }

  /**
   * Returns a `Wrapper` for a given address, a data buffer
   *
   * @param connection The Solana `Connection` object
   * @param address The `PublicKey` of the wrapper account
   */
  static async loadFromAddress({
    connection,
    address,
  }: {
    connection: Connection;
    address: PublicKey;
  }): Promise<Wrapper> {
    const buffer = await connection
      .getAccountInfo(address, 'confirmed')
      .then((accountInfo) => accountInfo?.data);

    if (buffer === undefined) {
      throw new Error(`Failed to load ${address}`);
    }
    return Wrapper.loadFromBuffer({ address, buffer });
  }

  /**
   * Updates the data in a Wrapper.
   *
   * @param connection The Solana `Connection` object
   */
  public async reload(connection: Connection): Promise<void> {
    const buffer = await connection
      .getAccountInfo(this.address, 'confirmed')
      .then((accountInfo) => accountInfo?.data);
    if (buffer === undefined) {
      throw new Error(`Failed to load ${this.address}`);
    }
    this.data = Wrapper.deserializeWrapperBuffer(buffer);
  }

  /**
   * Get the parsed market info from the wrapper.
   *
   * @param marketPk PublicKey for the market
   *
   * @return MarketInfoParsed
   */
  public marketInfoForMarket(marketPk: PublicKey): MarketInfoParsed | null {
    const filtered: MarketInfoParsed[] = this.data.marketInfos.filter(
      (marketInfo: MarketInfoParsed) => {
        return marketInfo.market.toBase58() == marketPk.toBase58();
      },
    );
    if (filtered.length == 0) {
      return null;
    }
    return filtered[0];
  }

  /**
   * Get the open orders from the wrapper.
   *
   * @param marketPk PublicKey for the market
   *
   * @return OpenOrder[]
   */
  public openOrdersForMarket(marketPk: PublicKey): OpenOrder[] | null {
    const filtered: MarketInfoParsed[] = this.data.marketInfos.filter(
      (marketInfo: MarketInfoParsed) => {
        return marketInfo.market.toBase58() == marketPk.toBase58();
      },
    );
    if (filtered.length == 0) {
      return null;
    }
    return filtered[0].orders;
  }

  // Do not include getters for the balances because those can be retrieved from
  // the market and that will be fresher data or the same always.

  /**
   * Print all information loaded about the wrapper in a human readable format.
   */
  public prettyPrint() {
    console.log('');
    console.log(`Wrapper: ${this.address.toBase58()}`);
    console.log(`========================`);
    console.log(`Trader: ${this.data.trader.toBase58()}`);
    this.data.marketInfos.forEach((marketInfo: MarketInfoParsed) => {
      console.log(`------------------------`);
      console.log(`Market: ${marketInfo.market}`);
      console.log(`Last updated slot: ${marketInfo.lastUpdatedSlot}`);
      console.log(
        `BaseAtoms: ${marketInfo.baseBalanceAtoms} QuoteAtoms: ${marketInfo.quoteBalanceAtoms}`,
      );
      marketInfo.orders.forEach((order: OpenOrder) => {
        console.log(
          `OpenOrder: ClientOrderId: ${order.clientOrderId} ${order.numBaseAtoms}@${order.price} SeqNum: ${order.orderSequenceNumber} LastValidSlot: ${order.lastValidSlot} IsBid: ${order.isBid}`,
        );
      });
    });
    console.log(`------------------------`);
  }

  /**
   * Deserializes wrapper data from a given buffer and returns a `Wrapper` object
   *
   * This includes both the fixed and dynamic parts of the market.
   * https://github.com/CKS-Systems/manifest/blob/main/programs/wrapper/src/wrapper_state.rs
   *
   * @param data The data buffer to deserialize
   *
   * @returns WrapperData
   */
  public static deserializeWrapperBuffer(data: Buffer): WrapperData {
    let offset = 0;
    // Deserialize the market header
    const _discriminant = data.readBigUInt64LE(0);
    offset += 8;

    const trader = beetPublicKey.read(data, offset);
    offset += beetPublicKey.byteSize;

    const _numBytesAllocated = data.readUInt32LE(offset);
    offset += 4;

    const _freeListHeadIndex = data.readUInt32LE(offset);
    offset += 4;

    const marketInfosRootIndex = data.readUInt32LE(offset);
    offset += 4;

    const _padding = data.readUInt32LE(offset);
    offset += 4;

    const marketInfos: MarketInfoRaw[] =
      marketInfosRootIndex != NIL
        ? deserializeRedBlackTree(
            data.subarray(FIXED_WRAPPER_HEADER_SIZE),
            marketInfosRootIndex,
            marketInfoBeet,
          )
        : [];
    const parsedMarketInfos: MarketInfoParsed[] = marketInfos.map(
      (marketInfoRaw: MarketInfoRaw) => {
        const rootIndex: number = marketInfoRaw.openOrdersRootIndex;
        const parsedOpenOrders: OpenOrderInternal[] =
          rootIndex != NIL
            ? deserializeRedBlackTree(
                data.subarray(FIXED_WRAPPER_HEADER_SIZE),
                rootIndex,
                openOrderBeet,
              )
            : [];
        const parsedOpenOrdersWithPrice: OpenOrder[] = parsedOpenOrders.map(
          (openOrder: OpenOrderInternal) => {
            return {
              ...openOrder,
              price: Buffer.from(openOrder.price).readDoubleLE(0),
            };
          },
        );
        return {
          market: marketInfoRaw.market,
          baseBalanceAtoms: marketInfoRaw.baseBalanceAtoms,
          quoteBalanceAtoms: marketInfoRaw.quoteBalanceAtoms,
          orders: parsedOpenOrdersWithPrice,
          lastUpdatedSlot: marketInfoRaw.lastUpdatedSlot,
        };
      },
    );

    return {
      trader,
      marketInfos: parsedMarketInfos,
    };
  }
}