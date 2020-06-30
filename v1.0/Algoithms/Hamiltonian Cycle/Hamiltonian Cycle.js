class Graph{
	constructor(vertices,graph){
		this.V=vertices;
		this.graph=graph;
	}
	
	isSafe(v,pos,path){
		
		
		if(this.graph[path[pos-1]][v]==0){
			return false;
		}
		
		
		for(let vertex of path){
			if(vertex==v){
				return false;
			}
		}
		
		return true;
		
	}
	
	hamCycleUtil(path,pos){
	
		if(pos==this.V){
			if(this.graph[path[pos-1]][path[0]]==1){
				return true;
			}
		}
		
		for(let v=1;v<this.V;v++){
			
			if(this.isSafe(v,pos,path)){
				
				path[pos]=v;
				
				if(this.hamCycleUtil(path,pos+1)){
					return true;
				}
				
			}
			
			path[pos]=-1;
			
			
		}
		
		return false;
		
	
	}
	
	hamCycle(){
		let path=[];
		for(let i=0;i<this.V;i++){
			path[i]=-1;
		}
		
		path[0]=0;
		
		if(!this.hamCycleUtil(path,1)){
			console.log("No more cycles");
			return false;
		}
		
		console.log(`Source ${path[0]}`);
		for(let vertex of path){
			console.log(vertex);
		}
		
		return true;
		
	}
	
}


let graph=[
[0,1,0,1,0],
[1,0,1,1,1],
[0,1,0,0,1],
[1,1,0,0,1],
[0,1,1,1,0]
];

let v=graph.length;

let g=new Graph(v,graph);

g.hamCycle();