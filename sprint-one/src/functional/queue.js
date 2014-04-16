var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[index] = value;
    index++;
  };

  instance.dequeue = function(){
    var keyLength = Object.keys(storage).length;
    var output = storage[index-keyLength];
    delete storage[index-keyLength];
    return [output, index, keyLength];
  };

  instance.size = function(){
    return Object.keys(storage).length;
  };

  return instance;
};
