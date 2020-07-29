/* use cases
    social networks
    location/mapping
    routing algorithms
    visual hierarchy
    file system optimizacions
    etc
*/

/* (V = number of vertex  -  E = number of edges)
OPERATION           ADJACENT LIST       ADJACENT MATRIX
add vertex              O(1)                O(V**2)
add edge                O(1)                O(1)
remover vertex          O(V + E)            O(V**2)
remove edge             O(E)                O(1)
query                   O(V + E)            O(1)
storage                 O(V + E)            O(V**2)
*/

/* 
graph traversal
use cases:
    peer to peer networking
    web crawlers
    finding "closest" matches/recommendations
    shortest path problems:
        -gps navigation
        -solving mazes
        -AI (shortest path to win the game)
*/

//undirected graph
class Graph {
    constructor() {
        this.adjacentList = {};
    }

    addVertex(name) {
        if (!this.adjacentList[name]) this.adjacentList[name] = [];
    }

    addEdge(v1, v2) {
        this.adjacentList[v1].push(v2);
        this.adjacentList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacentList[v1] = this.adjacentList[v1].filter(v => v !== v2);
        this.adjacentList[v2] = this.adjacentList[v2].filter(v => v !== v1);
    }

    removeVertex(v) {
        // this.adjacentList[v].forEach(vertex => this.adjacentList[vertex] = this.adjacentList[vertex].filter(el => el !== v));
        // delete this.adjacentList[v];

        while (this.adjacentList[v].length) {
            const adjacentVertex = this.adjacentList[v].pop();
            this.removeEdge(v, adjacentVertex);
        }
        delete this.adjacentList[v];
    }

    DFSRecursive(v) {
        const data = [];
        const visitedNodes = {};

        const helper = v => {
            if (!v) return;

            visitedNodes[v] = true;
            data.push(v);

            this.adjacentList[v].forEach(neighbor => {
                if (!visitedNodes[neighbor]) {
                    return helper(neighbor);
                }
            });
        };

        helper(v);
        return data;
    }

    DFSIterative(v) {
        const stack = [v];
        const data = [];
        const visitedNodes = {};
        let currentV;

        visitedNodes[v] = true;
        while (stack.length) {
            currentV = stack.pop();
            data.push(currentV);

            this.adjacentList[currentV].forEach(neighbor => {
                if (!visitedNodes[neighbor]) {
                    visitedNodes[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return data;
    }

    BFS(v) {
        const queue = [v];
        const data = [];
        const visitedV = {};
        visitedV[v] = true;
        
        let currentV;
        while (queue.length) {
            currentV = queue.shift();
            data.push(currentV);

            this.adjacentList[currentV].forEach(vertex => {
                if (!visitedV[vertex]) {
                    visitedV[vertex] = true;
                    queue.push(vertex);
                }
            });
        }
        return data;
    }
}

const graph = new Graph();
// graph.addVertex('Tokio');
// graph.addVertex('Dallas');
// graph.addVertex('Aspen');
// graph.addVertex('Hong Kong');
// graph.addVertex('Los Angeles');

// graph.addEdge('Tokio', 'Dallas');
// graph.addEdge('Hong Kong', 'Tokio');
// graph.addEdge('Aspen', 'Dallas');
// graph.addEdge('Hong Kong', 'Dallas');
// graph.addEdge('Los Angeles', 'Dallas');
// graph.addEdge('Hong Kong', 'Los Angeles');

// graph.removeVertex('Hong Kong');

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// console.log(graph.adjacentList);
console.log(graph.BFS('A'));