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
	
	DFSUtil(v,visited){
		
		visited[v]=true;
		
		console.log(v);
		
		for(let i of this.graph[v]){
			if(!visited[i]){
				this.DFSUtil(i,visited);
			}
		}
		
	}
	
	fillOrder(v,visited,stack){
		visited[v]=true;
		for(let i of this.graph[v]){
			if(!visited[i]){
				this.fillOrder(i,visited,stack);
			}
		}
		
		stack.push(v);
	}
	
	getTranspose(){
		
		let g=new Graph(this.V);
		
		for(let i in this.graph){
			for(let j of this.graph[i]){
				g.addEdge(j,i);
			}
		}
		
		return g;
		
	}
	
	
	SCC(){
		let visited=[],stack=[];
		
		function init(n){
			for(let i=0;i<n;i++){
				visited[i]=false;
			}
		}
		
		
		init(this.V);
		
		for(let i=0;i<this.V;i++){
			if(!visited[i]){
				this.fillOrder(i,visited,stack);
			}
		}
		
		init(this.V);
		
		let gr=this.getTranspose();
		
		while(stack.length!=0){
			let i=stack.pop();
			if(!visited[i]){
				gr.DFSUtil(i,visited);
				console.log("");
			}
		}
		
	}
	
	
}


let g=new Graph(5);


g.addEdge(1, 0); 
g.addEdge(0, 2); 
g.addEdge(2, 1);
g.addEdge(0, 3); 
g.addEdge(3, 4);

g.SCC(); 
  


