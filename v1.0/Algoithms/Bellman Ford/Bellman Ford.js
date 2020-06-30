function BellmanFord(graph,v,e,src){
	let dis=[];
	
	for(let i=0;i<v;i++){
		dis[i]=Infinity;
	}
	
	dis[src]=0;
	
	for(let i=0;i<v-1;i++){
		for(let j=0;j<e;j++){
			if(dis[graph[j][0]]+graph[j][2]<dis[graph[j][1]]){
				dis[graph[j][1]]=dis[graph[j][0]]+graph[j][2];
			}
		}
	}
	
	for(let i=0;i<e;i++){
		let x=graph[i][0];
		let y=graph[i][1];
		let weight=graph[i][2];
		if(dis[x]!=Infinity&&dis[x]+weight<dis[y]){
			console.log('The graph has negative weight cycle');
		}
	}
	
	console.log('The distance of vertex from source is...');
	
	for(let i=0;i<v;i++){
	console.log(`The distance from ${src} to ${i} is ${dis[i]}`);
	}
	
	
}


const graph=[
[0,1,-1],
[0,2,4],
[1,2,3],
[1,3,2],
[1,4,2],
[3,2,5],
[3,1,1],
[4,3,-3]
];


const v=5;
const e=8;

BellmanFord(graph,v,e,0);