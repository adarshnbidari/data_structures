var arr=[1,3,5,7,9,11];

var n=arr.length;

var st=constructST(arr,n);

console.log(`Segment tree is ${st}`);

var sum=getSum(st,n,1,3);

console.log(`The sum is ${sum} `);


updateValue(arr,st,n,1,10);


console.log(`Segement tree after the update is ${st}`);

function constructST(arr,n){
	
	let x=parseInt(Math.ceil(Math.log2(n)));
	
	let max=2*parseInt(Math.pow(2,x))-1;
	
	let st=[];
	
	for(let i=0;i<max;i++){
		st.push(0);
	}
	
	constructSTUtil(arr,0,n-1,st,0);
	
	return st;
	
}


function constructSTUtil(arr,ss,se,st,si){
	
	if(ss==se){
		st[si]=arr[ss];
		return arr[ss];
	}
	
	let mid=getMid(ss,se);
	
	st[si]=constructSTUtil(arr,ss,mid,st,si*2+1)+constructSTUtil(arr,mid+1,se,st,si*2+2);
	
	return st[si];
	
}


function getMid(ss,se){
	return Math.floor((ss+se)/2);
}

function getSum(st,n,qs,qe){
	
	if(qs<0 || qe>n-1 || qs>qe){
		return -1;
	}
	
	return getSumUtil(st,0,n-1,qs,qe,0);

}


function getSumUtil(st,ss,se,qs,qe,si){
	
	if(ss>=qs&&se<=qe){
		return st[si];
	}
	
	if(ss>qe || se<qs){
		return 0;
	}
	
	let mid=getMid(ss,se);
	
	return getSumUtil(st,ss,mid,qs,qe,si*2+1)+getSumUtil(st,mid+1,se,qs,qe,si*2+2);
	
}


function updateValue(arr,st,n,i,new_value){
	
	if(i<0 || i>n-1){
		return;
	}
	
	let diff=new_value-arr[i];
	
	arr[i]=new_value;
	
	return updateValueUtil(st,0,n-1,n,i,diff,0);
	
}


function updateValueUtil(st,ss,se,n,i,diff,si){
	
	if(i<ss || i>se){
		return;
	}
	
	st[si]=st[si]+diff;
	
	if(ss!=se){
		let mid=getMid(ss,se);
		updateValueUtil(st,ss,mid,n,i,diff,si*2+1);
		updateValueUtil(st,mid+1,se,n,i,diff,si*2+2);
	}
	
}