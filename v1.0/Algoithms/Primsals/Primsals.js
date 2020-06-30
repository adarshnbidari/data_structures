function PrimsMST(){
	
	const MST=new Graph();
	
	if(this.nodes.length===0) return MST;
	
	let s=this.nodes[0];
	
	let edgeQueue=new PriorityQueue();
	
	this.edges[s].forEach(e=>edgeQueue.enqueue([s,e.node],e.weight));
	
	let explored=new Set();
	
	explored.add(s);
	MST.addNode(s);
	
	let curMin=edgeQueue.dequeue();
	
	while(!edgeQueue.isEmpty()){
		
		while(!edgeQueue.isEmpty()&&explored.has(curMin.data[1])){
			curMin=edgeQueue.dequeue();
		}
		
		let nextNode=curMin.data[1];
		
		if(!explored.has(nextNode)){
			MST.addNode(nextNode);
			MST.addEdge(curMin.data[0],nextNode,curMin.priority);
			this.edges[nextNode].forEach(e=>edgeQueue.enqueue([nextNode,e.node],e.weight));
			s=nextNode;
			explored.add(s);
			
		}
		
	}
	
	return MST;
	
	
	
}

let g=new PrimsMST();
