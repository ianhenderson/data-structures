var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = undefined;
  return extend(newTree, treeMethods);
};


var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  node.parent = this;

  if (this.children !== undefined){
    this.children.push(node);
  } else {
    this.children = [];
    this.children.push(node);
  }
};

treeMethods.removeParent = function () {
  var kids = this.parent.children;
  for (var i = 0; i < kids.length; i++) {
    if (kids[i] === this) {
      kids.splice(i, 1);
    }
  }
  this.parent = null;
};

treeMethods.contains = function (target, memo) {
  memo = memo || false;
  var arr = this.children;
  if (this.value === target) memo = true;
  if (arr !== undefined) {
    for (var i = 0; i < arr.length; i++) {
      memo = arr[i].contains(target, memo);
    }
  }
  return memo;
};

