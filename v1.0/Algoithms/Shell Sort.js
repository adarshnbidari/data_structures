function ShellSort(arr){
	
	let gap=Math.floor(arr.length/2);
	
	
	while(gap>0){
		
		for(let i=gap;i<arr.length;i++){
			let temp=arr[i];
			
			let j=i;
			
			while(j>=gap&&arr[j-gap]>temp){
				arr[j]=arr[j-gap];
				j-=gap;
			}
			
			arr[j]=temp;
			
		}
		
		gap=Math.floor(gap/2);
	}
	
	
	return arr;
	
	
}

let arr=[45,22,23,42,1,4];

console.log(`The original unsorted array is ${arr}`);
console.log(`The sorted array is ${ShellSort(arr)}`);