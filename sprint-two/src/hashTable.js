var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];

  for (var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }

  tupleArray.push([k,v]);
  this._storage.set(i, tupleArray);
  this._size++;
  if (this._size > this._limit*0.75){
    this.resize(this._limit*2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];

  for (var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i) || [];

  for (var j = 0; j < tupleArray.length; j++) {
    var tuple = tupleArray[j];
    if (tuple[0] === k) {
      tupleArray.splice(j,1);
      this._size--;
      if (this._size < this._limit*0.25){
        this.resize(Math.floor(this._limit/2));
      }
      return tuple[1];
    }
  }
};

HashTable.prototype.resize = function(newSize){
  var oldstorage = this._storage;
  this._storage = makeLimitedArray(newSize);
  this._limit = newSize;
  this._size = 0;
  var self = this;

  oldstorage.each(function(tupleArray){
    if (!tupleArray){ return; }
    for (var i = 0; i<tupleArray.length; i++){
      var tuple = tupleArray[i];
      self.insert(tuple[0], tuple[1]);
    }
  })
};
