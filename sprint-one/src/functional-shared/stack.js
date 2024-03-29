var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.number = 0;
  return extend(instance, stackMethods);
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
};


var stackMethods = {};
stackMethods.push = function(value){
  this.storage[this.number] = value;
  this.number++;
};

stackMethods.pop = function(){
  this.number && this.number--;
  var output = this.storage[this.number];
  delete this.storage[this.number];
  return output;
};

stackMethods.size = function(){
  console.log(this);
  return this.number;
};
