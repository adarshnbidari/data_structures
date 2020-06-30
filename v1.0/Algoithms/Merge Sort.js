function mergeSort(arr){
	if(arr.length<=1){
		return arr;
	}
	
	
	let middle=Math.floor(arr.length/2);
	
	let left=arr.slice(0,middle);
	let right=arr.slice(middle);
	
	
	return merge(
	mergeSort(left),mergeSort(right)
	);
	
}


function merge(left,right){
	let result=[],li=0,ri=0;
	
	while(li<left.length&&ri<right.length){
		
		if(left[li]<right[ri]){
			result.push(left[li]);
			li++;
		}else{
			result.push(right[ri]);
			ri++;
		}
		
	}
	
	return result.concat(left.slice(li))
		.concat(right.slice(ri));
	
}


x=[33,66,2,5,232,66];

console.log(`The unsorted original array is ${x}`);

console.log(`The sorted array is ${mergeSort(x)}`);