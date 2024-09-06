(function() {var type_impls = {
"manifest":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetRedBlackTreeReadOnlyData%3C'a%3E-for-RedBlackTreeReadOnly%3C'a,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#144\">source</a><a href=\"#impl-GetRedBlackTreeReadOnlyData%3C'a%3E-for-RedBlackTreeReadOnly%3C'a,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, V&gt; <a class=\"trait\" href=\"hypertree/red_black_tree/trait.GetRedBlackTreeReadOnlyData.html\" title=\"trait hypertree::red_black_tree::GetRedBlackTreeReadOnlyData\">GetRedBlackTreeReadOnlyData</a>&lt;'a&gt; for <a class=\"struct\" href=\"hypertree/red_black_tree/struct.RedBlackTreeReadOnly.html\" title=\"struct hypertree::red_black_tree::RedBlackTreeReadOnly\">RedBlackTreeReadOnly</a>&lt;'a, V&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"hypertree/hypertree/trait.Payload.html\" title=\"trait hypertree::hypertree::Payload\">Payload</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#145\">source</a><a href=\"#method.data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hypertree/red_black_tree/trait.GetRedBlackTreeReadOnlyData.html#tymethod.data\" class=\"fn\">data</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section><section id=\"method.root_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#148\">source</a><a href=\"#method.root_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hypertree/red_black_tree/trait.GetRedBlackTreeReadOnlyData.html#tymethod.root_index\" class=\"fn\">root_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a></h4></section><section id=\"method.max_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#151\">source</a><a href=\"#method.max_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hypertree/red_black_tree/trait.GetRedBlackTreeReadOnlyData.html#tymethod.max_index\" class=\"fn\">max_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a></h4></section></div></details>","GetRedBlackTreeReadOnlyData<'a>","manifest::state::global::GlobalTraderTreeReadOnly","manifest::state::market::ClaimedSeatTreeReadOnly","manifest::state::market::BooksideReadOnly"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RedBlackTreeReadOnly%3C'a,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#112\">source</a><a href=\"#impl-RedBlackTreeReadOnly%3C'a,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, V&gt; <a class=\"struct\" href=\"hypertree/red_black_tree/struct.RedBlackTreeReadOnly.html\" title=\"struct hypertree::red_black_tree::RedBlackTreeReadOnly\">RedBlackTreeReadOnly</a>&lt;'a, V&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"hypertree/hypertree/trait.Payload.html\" title=\"trait hypertree::hypertree::Payload\">Payload</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#126\">source</a><h4 class=\"code-header\">pub fn <a href=\"hypertree/red_black_tree/struct.RedBlackTreeReadOnly.html#tymethod.new\" class=\"fn\">new</a>(\n    data: &amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>],\n    root_index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a>,\n    max_index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a>\n) -&gt; <a class=\"struct\" href=\"hypertree/red_black_tree/struct.RedBlackTreeReadOnly.html\" title=\"struct hypertree::red_black_tree::RedBlackTreeReadOnly\">RedBlackTreeReadOnly</a>&lt;'a, V&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new RedBlackTree. Does not mutate data yet. Assumes the actual\ndata in data is already well formed as a red black tree.\nIt is necessary to persist the root_index to re-initialize a tree, storing\nthe max_index is recommended when in-order iteration is performance critical.</p>\n<p>Depending on the index args this will behave differently:</p>\n<p>root=NIL: initializes an empty tree, get_max() is defined</p>\n<p>root!=NIL max=NIL: initializes an existing tree, get_max() is undefined &amp;\niter() will dynamically lookup the maximum</p>\n<p>root!=NIL max!=NIL: initializes an existing tree, get_max() is defined</p>\n</div></details></div></details>",0,"manifest::state::global::GlobalTraderTreeReadOnly","manifest::state::market::ClaimedSeatTreeReadOnly","manifest::state::market::BooksideReadOnly"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()