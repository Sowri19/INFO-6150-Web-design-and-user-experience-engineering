/**
 * A Node represents an HTML Element. A node can have a tag name,
 * a list of CSS classes and a list of children nodes.
 */
class NodeN {
  constructor(tag, children, classes, id) {
    // Tag name of the node.
    this.tag = tag;
    // Array of CSS class names (string) on this element.
    this.classes = classes;
    // Array of child nodes.
    this.children = children; // All children are of type Node

    this.id = id;
  }

  //  Returns descendent nodes matching the selector. Selector can be
  //  a tag name or a CSS class name.

  //  For example:

  //  1.
  //     <div>
  //       <span id="span-1"></span>
  //        <span id="span-2"></span>
  //      <div>
  //        <span id="span-3"></span>
  //      </div>
  //    </div>

  //   Selector `span` should return 3 span nodes in this order
  //    span-1 -> span-2 -> span-3.

  // 2.
  //    <div>
  //      <span id="span-1" class="note"></span>
  //       <span id="span-2"></span>
  //       <div>
  //        <span id="span-3"></span>
  //       </div>
  //    </div>
  //    Selector `.note` should return one span node with `note` class.

  //    3.
  //     <div>
  //       <span id="span-1"></span>
  //       <span id="span-2"></span>
  //   //    <article>
  //   //      <div>
  //   //        <span id="span-3"></span>
  //   //      </div>
  //   //    </article>
  //   //  </div>
  //   //  Selector `div span` should return three span nodes in this order
  //   //  span-1 -> span-2 -> span-3.

  //  @param {string} the selector string.
  //  @returns {Array} Array of descendent nodes.
  //  @public

  search(selector) {
    //breathFirst(body, console.log, selector);
    let root = this;
    let compare = []; //Filter elements pushed to compare array

    //queue.unshift(root);
    if (selector == null) {
      console.log("Null Input, Enter the input"); //Error conditions handled(Ivalid input handled)
    } else {
      if (root != null) {
        var queue = [];
        queue.unshift(root); //Add an Item in the beginning of an array

        while (queue.length != 0) {
          const node = queue.shift(); //Remove an Item from the beginnign of an array
          //console.log(node.tag, "aaaa");

          if (node != undefined) {
            //console.log("insiude child");
            var children = node.children;
            //console.log(children, "xxxxxxxx");
          }

          if (node.tag === selector) {
            //Comaparing the tag
            if (node.id !== "div-1") {
              compare.push(node);
            }
            // console.log("tag", node.tag);
          } else if (node.id === selector) {
            //Comparing the id
            compare.push(node);
          } else if (selector.indexOf(".") !== -1) {
            //Comparing the classes with the loop
            for (i = 0; i < node.classes.length; i++) {
              if (".".concat(node.classes[i]) == selector) {
                compare.push(node);
                if (node.id !== "para-1") {
                }
              }
            }
          } else if ("." + node.classes === selector) {
            compare.push(node);
          }

          // callback(node);
          //queue.push(...node.children);

          for (var i = 0; i < children.length; i++) {
            queue.push(children[i]);
          }
        }
        const index = compare.indexOf(this);
        if (index > -1) {
          compare.splice(index, 1); // 2nd parameter means remove one item only
        }
        console.log(compare); //Printing the values from the Array
      }
    }
    //console.log(root, "roooooooott");
  }
}
// constructor(tag, children, classes, id)

// let span_1 = new NodeN("span",[],["note1"], "span-1"); // "div", [div, span, h1], "innerdiv"
// let span_2 = new NodeN("span",[],[], "span-2");
// let span_3 = new NodeN("span",[],[], "span-3");
// let childDiv = new NodeN("div",[span_3],[],[]);
// let div = new NodeN ("div", [span_1, span_2, childDiv], [], []);

{
  /* <body id="content">
<div id="div-1" class="mainContainer">
<span id="span-1" class="note"></span>
<span id="span-2"></span>
<div id="div-2" class="subContainer1">
<p id="para-1" class="sub1-p1 note"></p>
<span id="span-3" class="sub1-span3"></span>
</div>
<div id="div-3" class="subContainer2">
<section id="sec-1">
<label id="lbl-1"></label>
</section>
</div>
<div id="div-4">
<span id="span-4" class="mania"></span>
<span id="span-5" class="note mania"></span>
</div>
</div>
<span id="span-6" class="randomSpan"></span>
</body> */
}

//constructor(tag,children,classes,id)
// creating Nodes for the elemnets
let span1 = new NodeN("span", [], ["note"], "span-1");
let span2 = new NodeN("span", [], [], "span-2");
let span3 = new NodeN("span", [], ["sub1-span3"], "span-3");
let span4 = new NodeN("span", [], ["mania"], "span-4");
let span5 = new NodeN("span", [], ["note", "mania"], "span-5");
let randomNode = new NodeN("span", [], ["randomSpan"], "span-6");
let p1 = new NodeN("p", [], ["sub1-p1", "note"], "para-1");
let label1 = new NodeN("label", [], [], "lbl-1");
let section1 = new NodeN("section", [label1], [], "sec-1");
let divNode4 = new NodeN("div", [span4, span5], [], "div-4");
let divNode3 = new NodeN("div", [section1], ["subContainer2"], "div-3");
let divNode2 = new NodeN("div", [p1, span3], ["subContainer1"], "div-2");
let divNode1 = new NodeN(
  "div",
  [span1, span2, divNode2, divNode3, divNode4],
  ["mainContainer"],
  "div-1"
);
let body = new NodeN("body", [divNode1, randomNode], [], "content");

// const breathFirst = function (startingNode, callback, selector) {
//   //const queue = [startingNode];
// };

// Searching the nodes

console.log("started...");
divNode1.search("span");
// divNode1.search(".note");
// divNode1.search("label");
// p1.search(".note");
// divNode1.search("div");
// randomNode.search("div");
// divNode2.search("section");
// body.search();
// body.search("section");
// divNode1.search(".randomSpan");
