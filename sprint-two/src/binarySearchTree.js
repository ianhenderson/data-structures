var makeBinarySearchTree = function(value){
  var result = Object.create(BSTMethods);
  result.value = value;
  result.left = null;
  result.right = null;
  return result;
};

var BSTMethods = {};

BSTMethods.insert = function(value){
  var path = value > this.value ? 'right' : 'left';
  if (this[path] !== null) {
    this[path].insert(value);
  } else {
    this[path] = makeBinarySearchTree(value);
  }
};

BSTMethods.contains = function(value){
  var path = value > this.value ? 'right' : 'left';
  if (this.value === value){
    return true;
  }else if(this[path] === null){
    return false;
  }else{
    return this[path].contains(value);
  }
};

BSTMethods.depthFirstLog = function(callback){};
