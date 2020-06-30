class Graph{
	constructor(vertices){
		this.V=vertices;
		this.graph=[];
		this.time=0;
		for(let i=0;i<this.V;i++){
			this.graph[i]=[];
		}
	}
	
	addEdge(u,v){
		this.graph[u].push(v);
		this.graph[v].push(u);
	}
	
	APUtil(u,visited,ap,parent,low,disc){
		let children=0;
		
		visited[u]=true;
		
		disc[u]=this.time;
		low[u]=this.time;
		
		this.time+=1;
		
		for(let v of this.graph[u]){
			if(visited[v]==false){
				parent[v]=u;
				children+=1;
				this.APUtil(v,visited,ap,parent,low,disc);
				
				low[u]=Math.min(low[u],low[v]);
				
				if(parent[u]==-1&&children>1){
					ap[u]=true;
				}
				
				if(parent[u]!=-1&&low[v]>=disc[u]){
					ap[u]=true;
				}
				
				
				
			}else if(v!=parent[u]){
				low[u]=Math.min(low[u],disc[v]);
			}
		}
		
		
	}
	
	AP(){
		let visited=[],ap=[],parent=[],low=[],disc=[];
		
		for(let i=0;i<this.V;i++){
			visited[i]=false;
			ap[i]=false;
			parent[i]=-1;
			low[i]=Infinity;
			disc[i]=Infinity;
		}
		
		for(let i=0;i<this.V;i++){
			if(visited[i]===false){
				this.APUtil(i,visited,ap,parent,low,disc);
			}
		}
		
		for(let i in ap){
			if(ap[i]===true){
				console.log(i);
			}
		}
		
	}
	
	
}

g1 =new Graph(5) 
g1.addEdge(1, 0) 
g1.addEdge(0, 2) 
g1.addEdge(2, 1) 
g1.addEdge(0, 3) 
g1.addEdge(3, 4) 

g1.AP();