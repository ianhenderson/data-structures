var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.index = 0;
  return extend(instance, queueMethods);
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function(){
  var keyLength = Object.keys(this.storage).length;
  var output = this.storage[this.index-keyLength];
  delete this.storage[this.index-keyLength];
  return output;
};

queueMethods.size = function(){
  return Object.keys(this.storage).length;
};
