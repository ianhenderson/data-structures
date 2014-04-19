var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i;
  this._size++;
  debugger;
  if (this._size >= 7){
    this._limit = 2 * this._limit;
    console.log("limit", this._limit);
    this._tmpStorage = makeLimitedArray(this._limit);
    this._storage.each(function(value, index){
        i = getIndexBelowMaxForKey(value, this._limit);
        this._tmpStorage.set(i,value);
    });
    this._storage = this._tmpStorage;
  }
  i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i,v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  this._size--;
  this.insert(k, null);
};

