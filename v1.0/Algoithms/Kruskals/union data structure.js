class UnionFind{
	constructor(elements){
		this.parent={};
		
		elements.forEach(e=>this.parent[e]=e);
	}
		
		
		union(a,b){
			let rootA=this.find(a);
			let rootB=this.find(b);
			
			if(rootA<rootB){
				if(this.parent[b]!=b) this.union(this.parent[b],a);
				this.parent[b]=this.parent[a];
			}else{
				if(this.parent[a]!=a) this.union(this.parent[a],b);
				this.parent[a]=this.parent[b];
			}
			
		}
		
		find(a){
			while(this.parent[a]!=a){
				a=this.parent[a];
			}
			return a;
		}
		
		connected(a,b){
			return this.find(a)===this.find(b);
		}
		
}

let g=new UnionFind(['a','b','c','d','e','f']);

g.union('a','b');
g.union('b','e');

console.log(g.connected('a','e'));