// Standard shuffle function
var shuffle = function (array) {
    var counter = array.length, temp, index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}


// Make a shuffled array containing max numbers
var array = [];
var max = 1000000;
for (var i = 0; i<max; i++){
  array.push(i);
}
shuffle(array);

// Insert numbers from array into a Binary Search Tree
var bst = makeBinarySearchTree(5);
for (var i=0;i<array.length;i++){
  bst.insert(array[i]);
}

// A very simple, linear search and compare function
var arrayContains = function(num){
  for (var i=0; i<array.length; i++){
    if (array[i] === num){ return;}
  }
}

// Record time taken to find element from array in BST
var stopwatch = function(){

  var num = Math.floor(max/2);
  var bstStart = new Date().getTime();
  bst.contains(num);
  var bstEnd = new Date().getTime();

  var arrayStart = new Date().getTime();
  arrayContains(num);
  var arrayEnd = new Date().getTime();

  var arrayIndexOfStart = new Date().getTime();
  array.indexOf(num);
  var arrayIndexOfEnd = new Date().getTime();

  console.log('BST search took ' + (bstEnd - bstStart) + 'ms.');
  console.log('Array search took ' + (arrayEnd - arrayStart) + 'ms.');
  console.log('Array.indexOf search took ' + (arrayIndexOfEnd - arrayIndexOfStart) + 'ms.');
};

