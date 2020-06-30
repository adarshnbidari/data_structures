class Graph{
	constructor(noOfVertices){
		
		this.noOfVertices=noOfVertices;
		
		this.matrix=[];
		
		for(let i=0;i<noOfVertices;i++){
			this.matrix.push([]);
		}
		
		var iv=[];
		for(let i=0;i<noOfVertices;i++){
			iv.push(0);
		}
		
		for(let i=0;i<noOfVertices;i++){
			this.matrix[i].push(...iv);
		}
		
		//console.log(this.matrix);
		
	
	}
	
	
	addVertex(v){
		
		/* for(let i=0;i<this.noOfVertices;i++){
			this.matrix[v].push(0);
		} */
		
		
		
		
		//return this.matrix;
		
	}
	
	addEdge(v,w){
		
		this.matrix[v][w]=1;
		
		return this.matrix;
	}
	
	printGraph(){
		
		for(let i=0;i<this.matrix.length;i++){
			
			var idx=this.matrix[i].indexOf(1);
			
			while(idx!=-1){
				console.log(`The node ${i} is connected to ${idx}`);
				
				idx=this.matrix[i].indexOf(1,idx+1);
				
			}
			
		}
		
	}
	
	
	
	
	
}

var g=new Graph(6);


console.log(g.addEdge(0,1));
console.log(g.addEdge(0,2));
console.log(g.addEdge(1,0));
console.log(g.addEdge(1,3));
console.log(g.addEdge(1,4));
console.log(g.addEdge(2,0));
console.log(g.addEdge(2,4));
console.log(g.addEdge(2,5));
console.log(g.addEdge(3,1));
console.log(g.addEdge(3,4));
console.log(g.addEdge(4,1));
console.log(g.addEdge(4,2));
console.log(g.addEdge(4,3));
console.log(g.addEdge(4,5));
console.log(g.addEdge(5,2));
console.log(g.addEdge(5,4));



console.log(g.printGraph());