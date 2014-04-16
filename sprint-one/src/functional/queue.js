var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    var output = storage[0];
    for (var i = 0; i < size; i++){
      storage[i] = storage[i+1];
    }
    size && size--;
    delete storage[size];
    return output;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
