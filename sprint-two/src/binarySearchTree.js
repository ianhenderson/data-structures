var makeBinarySearchTree = function(value){
  var result = Object.create(BSTMethods);
  result.value = value;
  result.left = null;
  result.right = null;
  return result;
};

var BSTMethods = {};

BSTMethods.insert = function(value){
  var dir = value > this.value ? 'right' : 'left';
  if (this[dir] !== null) {
    this[dir].insert(value);
  } else {
    this[dir] = makeBinarySearchTree(value);
  }
};

BSTMethods.contains = function(value){};

BSTMethods.depthFirstLog = function(callback){};
