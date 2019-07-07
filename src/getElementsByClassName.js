// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var elements = [];
  var root = document.body; // set the first node

  // recursive function
  var nodeHasClass = function(node) {
  	// check if current node has class
  	if (node.classList && node.classList.contains(className)) {
  		elements.push(node);
  	}
  	// check if node has children, call recursion on elements
  	if (node.hasChildNodes) {
  		for (var i = 0; i < node.childNodes.length; i++) {
  			nodeHasClass(node.childNodes[i]);
  		}
  	}
  }
  // call function on root node
  nodeHasClass(root);


  // if (document.body.contains(className)) {
  // }

  // for (var i = 0; i < document.body.childNodes.length; i++) {
  // 	if (document.body.childNodes[i].contains(className)) {
  // 	}
  // }

  // if (document.body.classList.contains(className)) {
  // }

  return elements;

};
