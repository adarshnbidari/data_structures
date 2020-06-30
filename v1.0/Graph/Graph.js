class Graph{
	
	
	constructor(noOfVertices){
		this.noOfVertices=noOfVertices;
		this.AdjList=new Map();
	}
	
	addVertex(v){
		this.AdjList.set(v,[]);
	}
	
	addEdge(v,w){
		this.AdjList.get(v).push(w);
		
		this.AdjList.get(w).push(v);
	}
	
	printGraph(){
		var get_keys=this.AdjList.keys();
		
		
		for(var i of get_keys){
			var get_values=this.AdjList.get(i);
			
			var conc="";
			
			for(var j of get_values){
				conc+=j+" ";
			}
			
			console.log(i+"->"+conc);
			
		}
	}
	
	
	bfs(startingNode){
		
		var visited=[];
		
		for(var i=0;i<this.noOfVertices;i++){
			visited[i]=false;
		}
		
		visited[startingNode]=true;
		
		var q=[];
		
		q.push(startingNode);
		
		while(q.length!=0){
			
			var getQueueElement=q.shift();
			
			console.log(getQueueElement);
			
			var get_list=this.AdjList.get(getQueueElement);
			
			
			for(let node of get_list){
				
				
				if(!visited[node]){
					visited[node]=true;
					q.push(node);
					
				}
				
				
			}
			
			
		}
		
	}
	
	dfs(startingNode){
		var visited=[];
		
		for(let i=0;i<this.noOfVertices;i++){
			visited[i]=false;
		}
		this.DFSutil(startingNode,visited);
	}
	
	DFSutil(node,visited){
		visited[node]=true;
		
		console.log(node);
		
		var get_list=this.AdjList.get(node);
		
		for(let i of get_list){
			if(!visited[i]){
				this.DFSutil(i,visited);
			}
		}
		
	}


}


let g=new Graph(6);

let vertices=['A','B','C','D','E','F'];


for(let i of vertices){
	g.addVertex(i);
}

g.addEdge('A','B');
g.addEdge('A','D');
g.addEdge('A','E');
g.addEdge('B','C');
g.addEdge('D','E');
g.addEdge('E','F');
g.addEdge('E','C');
g.addEdge('C','F');

//g.bfs('B');
g.dfs('B');

g.printGraph();