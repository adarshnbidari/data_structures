function SelectionSort(arr){
	
	let min;
	
	for(let i=0;i<arr.length;i++){
		min=i;
		
		for(let j=i+1;j<arr.length;j++){
			if(arr[j]<arr[min]){
				min=j;
			}
		}
		
		[arr[i],arr[min]]=[arr[min],arr[i]];
	}
	
	return arr;
	
}

var arr=[443,46,4,421,3,521,532];

console.log(`The original unsorted array is ${arr}`);

console.log(`The sorted array is ${SelectionSort(arr)}`);