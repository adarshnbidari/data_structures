function KruskalsMST(){
	
	const MST=new Graph();
	
	
	this.nodes.forEach(e=>MST.addNode(e));
	
	if(this.nodes.length===0) return MST;
	
	let edgeQueue=new PriorityQueue();
	
	for(let node in this.edges){
		this.edges[node].forEach(e=>edgeQueue.enqueue([node,e.node],e.weight));
	}
	
	let uf=new UnionFind(this.nodes);
	
	while(!edgeQueue.isEmpty()){
		let nextEdge=edgeQueue.dequeue();
		let node=nextEdge.data;
		let weight=nextEdge.priority;
		
		
		if(!uf.connected(node[0],node[1])){
			MST.addEdge(node[0],node[1],weight);
			uf.union(node[0],node[1]);
		}
		
	}
	
	return MST;
}