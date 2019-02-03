function bfs(rootNode, vertices, edges){
   let rootNode = vertices[0];
   let queue = [];
   queue.push(rootNode);

   while (queue.length !== 0) {
       let firstNode = queue.shift();
       let adjacentVertices = findAdjacentNodes(firstNode);
       for vertex in adjacentVertices {
           markDistanceAndPredecessor(vertex);
           queue.push(vertex);
       }
   }
}

function findAdjacentNodes() {

}

function markDistanceAndPredecessor(vertex) {
  if vertex
}
