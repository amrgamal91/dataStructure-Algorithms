/**
 * Graphs are collections of nodes (also called vertices) and the connections (called edges) between them. Graphs are also known as networks.
One example of graphs is a social network. The nodes are people and the edges are friendship.

There are two major types of graphs: directed and undirected. Undirected graphs are graphs without any direction on the edges between nodes. Directed graphs, in contrast, are graphs with a direction in its edges.
Two common ways to represent a graph are an adjacency list and an adjacency matrix.

An adjacency list can be represented as a list where the left side is the node and the right side lists all the other nodes it’s connected to.
An adjacency matrix is a grid of numbers, where each row or column represents a different node in the graph. At the intersection of a row and a column is a number that indicates the relationship. Zeros mean there is no edge or relationship. Ones mean there is a relationship. Numbers higher than one can be used to show different weights.
Traversal algorithms are algorithms to traverse or visit nodes in a graph. The main types of traversal algorithms are breadth-first search and depth-first search. One of the uses is to determine how close nodes are to a root node. See how to implement breadth-first search in JavaScript in the video below.


╔═══════════════╦════════════╗
║   Algorithm   ║    Time    ║
╠═══════════════╬════════════╣
║ Storage       ║ O(|V|+|E|) ║
║ Add Vertex    ║ O(1)       ║
║ Add Edge      ║ O(1)       ║
║ Remove Vertex ║ O(|V|+|E|) ║
║ Remove Edge   ║ O(|E|)     ║
║ Query         ║ O(|V|)     ║
╚═══════════════╩════════════╝
https://medium.freecodecamp.org/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b
 */
/* Graphs: Breadth-first search */

function bfs(graph, root) {
  var nodesLen = {};

  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;

  var queue = [root];
  var current;

  while (queue.length != 0) {
    current = queue.shift();

    var curConnected = graph[current];
    var neighborIdx = [];
    var idx = curConnected.indexOf(1);
    while (idx != -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    for (var j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];
console.log(bfs(exBFSGraph, 1));
