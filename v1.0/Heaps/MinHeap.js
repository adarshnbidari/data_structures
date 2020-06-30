let MinHeap=function(){
	var heap=[null];
	
	this.insert=function(num){
		heap.push(num);
		
		if(heap.length>2){
			let idx=heap.length-1;
			
			while(heap[idx]<heap[Math.floor(idx/2)]){
				
				if(idx>=1){
					[heap[idx],heap[Math.floor(idx/2)]]=[heap[idx/2],heap[idx]];
					
					if(heap[Math.floor(idx/2)]>1){
						idx=heap[Math.floor(idx/2)];
					}else{
						break;
					}
					
				}
			}
		}
		
	};
	
	this.remove=function(){
		let smallest=heap[1];
		
		if(heap.length>2){
			heap[1]=heap[heap.length-1];
			heap.splice(heap.length-1);
			
			if(heap.length==3){
				if(heap[1]>heap[2]){
					[heap[1],heap[2]]=[heap[2],heap[1]];
				}
				
				return smallest;
			}
			
			let i=1;
			let left=i*2;
			let right=i*2+1;
			
			while(heap[i]>=heap[left]||heap[i]>=heap[right]){
				
				if(heap[left]<heap[right]){
					[heap[i],heap[left]]=[heap[left],heap[i]];
					i=i*2;
				}else{
					[heap[i],heap[right]]=[heap[right],heap[i]];
					i=i*2+1;
				}
				
				left=i*2;
				right=i*2+1;
				
				if(heap[left]===undefined||heap[right]===undefined){
					break;
				}
				
			}
			
			
			return smallest;
			
		}else if(heap.length===2){
			heap.splice(1,1);
		}else{
			return null;
		}
	};
	
	this.sort=function(){
		let result=new Array();
		
		while(heap.length>1){
			result.push(this.remove());
		}
		
		return result;
		
	};
	
};

var mh=new MinHeap();

mh.insert(2);
mh.insert(1);
mh.insert(3);
mh.insert(5);
mh.insert(23);


console.log(mh.sort());


