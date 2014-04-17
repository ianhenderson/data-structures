var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // debugger;
    if (list.head === null){
      var node = makeNode(value);
      list.head = node;
      list.tail = node;
    }
    else if (list.head === list.tail){
      var node = makeNode(value);
      list.head.next = node;
      list.tail = node;
    }
    else{
      var node = makeNode(value);
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
    // delete head (?)
  };

  list.contains = function(target, node){
    node = node || list.head;
    if (node.value === target){ return true; }
    if (node.next === null){ return false; }
    else{ return list.contains(target, node.next);}
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
