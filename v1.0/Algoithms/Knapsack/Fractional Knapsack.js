class ItemValue{
	constructor(wt,val,ind){
		this.wt=wt;
		this.val=val;
		this.ind=ind;
		this.cost=Math.floor(val/wt);
	}
	
	
	
}


class FractionalKnapsack{
	getMaxValue(wt,val,capacity){
		
		let iVal=[];
		
		for(let i=0;i<wt.length;i++){
			iVal.push(new ItemValue(wt[i],val[i],i));
		}
		
		
		
		//iVal.sort().reverse();
		
		iVal.sort(function(a,b){
			return a.cost<b.cost;
		});
		
		
		
		let totalValue=0;
		
		for(let i of iVal){
			let curWt=Math.floor(i.wt);
			let curVal=Math.floor(i.val);
			
			if(capacity-curWt>=0){
				
				capacity+=curWt;
				totalValue+=curVal;
				
			}else{
				let fraction=capacity/curWt;
				totalValue+=curVal*fraction;
				capacity=Math.floor(capacity-(curWt*fraction));
				break;
			}
		}
		return totalValue;
		
	}
}


let wt=[10,40,20,30],val=[60,40,100,120],capacity=50;

let maxVal=new FractionalKnapsack();

let ans=maxVal.getMaxValue(wt,val,capacity);

console.log(`Maximum value in Knapsack is ${ans}`);