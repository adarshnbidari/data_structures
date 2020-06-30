function knapSack(W,wt,val,n){
	let k=[];
	for(let i=0;i<=n;i++){
		k[i]=[];
	}
	
	for(let i=0;i<=n;i++){
		for(let w=0;w<=W;w++){
			if(i==0 || w==0){
				k[i][w]=0;
			}else if(wt[i-1]<=w){
				k[i][w]=Math.max(val[i-1]+k[i-1][w-wt[i-1]],k[i-1][w]);
			}else{
				k[i][w]=k[i-1][w];
			}
		}
	}
	
	return k[n][W];
	
}

let val=[60,100,120];
let wt=[10,20,30];
let W=50;
let n=val.length;

console.log(knapSack(W,wt,val,n));