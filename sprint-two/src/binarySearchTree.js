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

BSTMethods.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left){ this.left.depthFirstLog(callback);}
  if (this.right){ this.right.depthFirstLog(callback);}
};

BSTMethods.breadthFirstLog = function(callback, queue){
  queue = queue || [];
  if (queue.length === 0) { queue.push(this); }
  var current = queue.shift();
  callback(current.value);
  if (this.left) { queue.push(this.left); }
  if (this.right) { queue.push(this.right); }
  if (queue.length === 0) { return; }
  else {
    var next = queue[0];
    next.breadthFirstLog(callback, queue);
  }

};
