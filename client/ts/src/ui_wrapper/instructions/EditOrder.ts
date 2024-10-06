/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category EditOrder
 * @category generated
 */
export const EditOrderStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>([['instructionDiscriminator', beet.u8]], 'EditOrderInstructionArgs');

export const editOrderInstructionDiscriminator = 3;

/**
 * Creates a _EditOrder_ instruction.
 *
 * @category Instructions
 * @category EditOrder
 * @category generated
 */
export function createEditOrderInstruction(
  programId = new web3.PublicKey('UMnFStVeG1ecZFc2gc5K3vFy3sMpotq8C91mXBQDGwh'),
) {
  const [data] = EditOrderStruct.serialize({
    instructionDiscriminator: editOrderInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}