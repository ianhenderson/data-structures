var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var keys = Object.keys(this.nodes);
  if (keys.length === 1) {
    toNode = keys[0];
  }

  this.nodes[newNode] = {};
  this.nodes[newNode].edges = {};
  if (toNode) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return this.nodes[node] !== undefined ? true: false;
};

Graph.prototype.removeNode = function(node){
  var edges = this.nodes[node].edges;
  var keys = Object.keys(edges);
  if (keys.length === 0) {
    delete this.nodes[node];
  } else {
    for (var key in edges) {
      this.removeEdge(node, key);
    }
  }

};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.nodes[fromNode].edges[toNode] !== undefined;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges[toNode] = true;
  this.nodes[toNode].edges[fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
  if (Object.keys(this.nodes[fromNode].edges).length === 0) {
    delete this.nodes[fromNode];
  }
  if (Object.keys(this.nodes[toNode].edges).length === 0) {
    delete this.nodes[toNode];
  }
};
