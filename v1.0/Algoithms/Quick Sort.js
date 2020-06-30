function swap(arr,i,j){
	[arr[i],arr[j]]=[arr[j],arr[i]];
}

function partition(arr,left,right){
	let pivot=arr[Math.floor((right+left)/2)];
	let i=left;
	let j=right;
	
	
	while(i<=j){
		while(arr[i]<pivot){
			i++;
		}
		while(arr[j]>pivot){
			j--;
		}
		
		if(i<=j){
			swap(arr,i,j);
			i++;
			j--;
		}
	}
	
	
	return i;
}

function Quicksort(arr,left,right){
	
	if(arr.length>1){
		let index=partition(arr,left,right);
		
		if(left<index-1){
			Quicksort(arr,left,index-1);
		}
		
		if(index<right){
			Quicksort(arr,index,right);
		}
	}
	
	return arr;
	
}


let arr=[5,6,2,13,4,1,21,3];

console.log(`The original unsorted array is ${arr}`);
console.log(`The sorted array is ${Quicksort(arr,0,arr.length-1)}`);
