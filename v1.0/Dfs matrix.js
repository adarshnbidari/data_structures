function dfs(startingNode,graph){

	var visited=[];
	var stack=[];
	var route=[];
	
	stack.push(startingNode);
	
	visited[startingNode]=true;
	route.push(startingNode);
	
	while(stack.length!=0){
		var node=stack.pop();
		
		for(let i=0;i<graph[node].length;i++){
			if(graph[node][i]&&!visited[i]){
				visited[i]=true;
				stack.push(i);
				route.push(i);
			}
		}
		
	}
	
	return route;
	
	
}



const matrixGraph=[
[0,1,1,1,0],
[0,0,1,0,0],
[1,1,0,0,0],
[0,0,0,1,0],
[0,1,0,0,0]
];


console.log(dfs(2,matrixGraph));