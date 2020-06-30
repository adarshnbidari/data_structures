function DijikstraAlgorithm(startNode){
	
	
	let distances={};
	let prev={};
	
	let pq=new PriorityQueue();
	
	distances[startNode]=0;
	pq.enqueue(startNode,0);
	
	this.nodes.forEach(node=>{
		if(node!=startNode) distances[node]=Infinity;
		prev[node]=null;
	});
	
	while(!pq.isEmpty()){
		
		let minNode=pq.dequeue();
		let curNode=minNode.data;
		let weight=minNode.priority;
		
		this.edges[curNode].forEach(e=>{
			let calc=distances[curNode]+e.weight;
			
			if(calc<distances[e.node]){
				distances[e.node]=calc;
				prev[e.node]=curNode;
				e.enqueue(e.node,e.weight);
			}
			
		});
		
	}
	
	return	distances;
	
}

