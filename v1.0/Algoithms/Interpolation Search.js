function Search(A,key){
	
	let left=0;
	let right=A.length-1;
	
	while(A[right]!=A[left]&&key>=A[left]&&key<=A[right]){
		let mid=left+((key-A[left])*(right-left)/(A[right]-A[left]));
		
		if(key==A[mid]){
			return mid;
		}
		
		if(key<A[mid]){
			right=mid-1;
		}else if(key>A[mid]){
			left=mid+1;
		}
	}
	
	return -1;
	
}

const A=[1,2,3,4,5,6,7,8,9];

console.log(Search(A,5));