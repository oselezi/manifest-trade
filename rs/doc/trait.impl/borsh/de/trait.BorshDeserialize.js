(function() {var implementors = {
"manifest":[["impl BorshDeserialize for <a class=\"enum\" href=\"manifest/state/resting_order/enum.OrderType.html\" title=\"enum manifest::state::resting_order::OrderType\">OrderType</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/program/processor/batch_update/struct.BatchUpdateParams.html\" title=\"struct manifest::program::processor::batch_update::BatchUpdateParams\">BatchUpdateParams</a><div class=\"where\">where\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"hypertree/utils/type.DataIndex.html\" title=\"type hypertree::utils::DataIndex\">DataIndex</a>&gt;: BorshDeserialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"manifest/program/processor/batch_update/struct.CancelOrderParams.html\" title=\"struct manifest::program::processor::batch_update::CancelOrderParams\">CancelOrderParams</a>&gt;: BorshDeserialize,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"manifest/program/processor/batch_update/struct.PlaceOrderParams.html\" title=\"struct manifest::program::processor::batch_update::PlaceOrderParams\">PlaceOrderParams</a>&gt;: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/program/processor/batch_update/struct.BatchUpdateReturn.html\" title=\"struct manifest::program::processor::batch_update::BatchUpdateReturn\">BatchUpdateReturn</a><div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>, <a class=\"type\" href=\"hypertree/utils/type.DataIndex.html\" title=\"type hypertree::utils::DataIndex\">DataIndex</a>)&gt;: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/program/processor/batch_update/struct.CancelOrderParams.html\" title=\"struct manifest::program::processor::batch_update::CancelOrderParams\">CancelOrderParams</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"hypertree/utils/type.DataIndex.html\" title=\"type hypertree::utils::DataIndex\">DataIndex</a>&gt;: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/program/processor/batch_update/struct.PlaceOrderParams.html\" title=\"struct manifest::program::processor::batch_update::PlaceOrderParams\">PlaceOrderParams</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a>: BorshDeserialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.i8.html\">i8</a>: BorshDeserialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a>: BorshDeserialize,\n    <a class=\"enum\" href=\"manifest/state/resting_order/enum.OrderType.html\" title=\"enum manifest::state::resting_order::OrderType\">OrderType</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/program/processor/deposit/struct.DepositParams.html\" title=\"struct manifest::program::processor::deposit::DepositParams\">DepositParams</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/program/processor/global_deposit/struct.GlobalDepositParams.html\" title=\"struct manifest::program::processor::global_deposit::GlobalDepositParams\">GlobalDepositParams</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/program/processor/swap/struct.SwapParams.html\" title=\"struct manifest::program::processor::swap::SwapParams\">SwapParams</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/program/processor/withdraw/struct.WithdrawParams.html\" title=\"struct manifest::program::processor::withdraw::WithdrawParams\">WithdrawParams</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/quantities/struct.BaseAtoms.html\" title=\"struct manifest::quantities::BaseAtoms\">BaseAtoms</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/quantities/struct.GlobalAtoms.html\" title=\"struct manifest::quantities::GlobalAtoms\">GlobalAtoms</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/quantities/struct.QuoteAtoms.html\" title=\"struct manifest::quantities::QuoteAtoms\">QuoteAtoms</a><div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,</div>"],["impl BorshDeserialize for <a class=\"struct\" href=\"manifest/quantities/struct.QuoteAtomsPerBaseAtom.html\" title=\"struct manifest::quantities::QuoteAtomsPerBaseAtom\">QuoteAtomsPerBaseAtom</a><div class=\"where\">where\n    [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.array.html\">2</a>]: BorshDeserialize,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()