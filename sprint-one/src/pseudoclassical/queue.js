var Queue = function(){
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function(){
  var keyLength = Object.keys(this.storage).length;
  var output = this.storage[this.index-keyLength];
  delete this.storage[this.index-keyLength];
  return output;
};

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
};
