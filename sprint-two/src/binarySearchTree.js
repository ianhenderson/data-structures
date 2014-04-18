var makeBinarySearchTree = function(value){
  var result = Object.create(BSTMethods);
  result.value = value;
  result.left = null;
  result.right = null;
  return result;
};

var BSTMethods = {};

BSTMethods.insert = function(value){
  debugger;
  var node =  makeBinarySearchTree(value);
  // path = path || this;
  var dir = value > this.value ? this.right : this.left;

  if (dir !== null) {
    dir.insert(value);
  } else {
    dir = node;
  }

  // if (node.value === this.value)
};

BSTMethods.contains = function(value){};

BSTMethods.depthFirstLog = function(callback){};
