function insertionSort(A){    
	
	for(let i=1;i<A.length;i++){
		
		let key=A[i];
		let j=i-1;
		
		while(j>=0&&A[j]>key){
			A[j+1]=A[j];
			j-=1;
		}
		
		A[j+1]=key;
		
	}
	
	return A;
	
}


var x=[17,10,21,3];

console.log(`The original unsorted array is ${x}`);

console.log(`The sorted array is ${insertionSort(x)}`);



