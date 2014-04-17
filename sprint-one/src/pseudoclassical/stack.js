var Stack = function(){
  this.storage = {};
  this.number = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.number] = value;
  this.number++;
};

Stack.prototype.pop = function(){
  this.number && this.number--;
  var output = this.storage[this.number];
  delete this.storage[this.number];
  return output;
};

Stack.prototype.size = function(){
  return this.number;
};
