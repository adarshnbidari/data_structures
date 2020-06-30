let V=4,answer=[];

function tsp(graph,v,curPos,n,count,cost){
	
	if(count==n&&graph[curPos][0]){
		answer.push(cost+graph[curPos][0]);
		return;
	}
	
	for(let i=0;i<n;i++){
		if(!v[i]&&graph[curPos][i]){
			v[i]=true;
			tsp(graph,v,i,n,count+1,cost+graph[curPos][i]);
			v[i]=false;
		}
	}
	
	
}


let n=4;
let graph=[
[0,10,15,20],
[10,0,35,25],
[15,35,0,30],
[20,25,30,0]
];

let v=[];
for(let i=0;i<n;i++){
	v[i]=false;
}

v[0]=true;

tsp(graph,v,0,n,1,0);

//answer.sort();

console.log(answer);

let ans=Math.min(...answer);


console.log(ans);