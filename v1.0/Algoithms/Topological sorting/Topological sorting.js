class Graph{
	constructor(vertices){
		this.V=vertices;
		this.graph=[];
		
		for(let i=0;i<this.V;i++){
			this.graph[i]=[];
		}
		
	}
	
	
	addEdge(u,v){
		this.graph[u].push(v);
	}
	
	topologicalSortUtil(v,visited,stack){
		visited[v]=true;
		
		
		for(let i of this.graph[v]){
			if(!visited[i]){
				this.topologicalSortUtil(i,visited,stack);
			}
		}
		
		stack.push(v);
		
	}
	
	topologicalSort(){
		let visited=[],stack=[];
		
		for(let i=0;i<this.V;i++){
			visited[i]=false;
		}
		
		for(let i=0;i<this.V;i++){
			if(!visited[i]){
				this.topologicalSortUtil(i,visited,stack);
			}
		}
		
		
		while(stack.length!=0){
			console.log(stack.pop());
		}
		
	}
	
	
}

let g=new Graph(6) 
g.addEdge(5, 2); 
g.addEdge(5, 0); 
g.addEdge(4, 0); 
g.addEdge(4, 1); 
g.addEdge(2, 3); 
g.addEdge(3, 1); 
  

g.topologicalSort() 
