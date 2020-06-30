function radixSort(arr){
	let maxNum=Math.floor(...arr)*10,divisor=10;

	while(divisor<maxNum){

		let buckets=[...Array(10)].map(()=>[]);

		for(let num of arr){
			buckets[Math.floor((num%divisor)/(divisor/10))].push(num);
		}

		arr=[].concat(...buckets);

		divisor *=10;

	}

	return arr;
}


let arr=[454,245,5,55,4];

console.log(radixSort(arr));
