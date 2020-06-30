function hash(string,max){
	
	let hash=0;
	
	for(let i=0;i<string.length;i++){
		hash+=string.charCodeAt(i);
	}
	
	return hash%max;
	
}


let HashTable=function(){
	
	let storage=[];
	const storageLimit=4;

	this.print=function(){
		console.log(storage);
	};
	
	this.add=function(key,value){
		let index=hash(key,storageLimit);
		
		if(storage[index]===undefined){
			storage[index]=[[key,value]];
		}else{
			var inserted=false;
			
			for(let i=0;i<storage[index].length;i++){
				if(storage[index][i][0]===key){
					storage[index][i][1]=value;
					inserted=true;
				}
			}
			
		}
		
		if(inserted===false){
			storage[index].push([key,value]);
		}
		
	};
	
	this.remove=function(key){
		let index=hash(key,storageLimit);
		
		if(storage[index].length==0&&storage[index][0][0]===key){
			delete storage[index];
		}else{
			for(let i=0;i<storage[index].length;i++){
				if(storage[index][i][0]===key){
					delete storage[index][i];
				}
			}
		}
		
		
	};
	
	this.lookup=function(key){
		let index=hash(key,storageLimit);
		
		for(let i=0;i<storage[index].length;i++){
			if(storage[index][i][0]===key){
				return storage[index][i][1];
			}
		}
		
	};
	
}

//console.log(hash('adarsh',10));


let ht=new HashTable();

ht.add('name','adarsh');
ht.add('age',21);
ht.add('anme','nagesh');

console.log(ht.print());

console.log(ht.lookup('anme'));

ht.remove('anme');


console.log(ht.print());