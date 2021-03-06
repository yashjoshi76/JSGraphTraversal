// const dfs = (graph, source) => {
//   const stack = [source];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);
//     for (let i of graph[current]) {
//       stack.push(i);
//     }
//   }
// };

//recursive
const dfs = (graph, source) => {
  console.log(source);
  for (let i of graph[source]) {
    dfs(graph, i);
  }
};
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
};

dfs(graph, "a");
