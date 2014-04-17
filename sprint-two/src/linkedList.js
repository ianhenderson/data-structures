var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if(list.head === null){
      list.head = node;
      list.tail = node;
    } else{
      list.tail.next = node;
      node.previous =  list.tail;
      list.tail = node;
    }
  };

  list.addToHead = function(value){
    var node = makeNode(value);
    if(list.head === null){
      list.head = node;
      list.tail = node;
    } else{
      list.head.previous = node;
      node.next =  list.head;
      list.head = node;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
    list.head.previous = null;
  };

  list.contains = function(target, node){
    node = node || list.head;
    if (node.value === target){
      return true;
    } else if (node.next === null){
      return false;
    } else{
      return list.contains(target, node.next);
    }
  };

  var makeNode = function(value){
    var node = {};
    node.value = value;
    node.next = null;
    node.previous = null;

    return node;
  };

  return list;
};

