function countingSort(list,min,max){
	let count=[];
	let len=list.length,z=0;

	for(let i=min;i<=max;i++){
		count[i]=0;
	}

	for(let i=0;i<len;i++){
		count[list[i]]++;
	}


	for(let i=min;i<=max;i++){
		while(count[i]-- >0){
			list[z++]=i;
		}
	}


	return list;

	
}


let arr=[4,2,5,6,1,2];

let min=Math.min(...arr),max=Math.max(...arr);



console.log(countingSort(arr,min,max));