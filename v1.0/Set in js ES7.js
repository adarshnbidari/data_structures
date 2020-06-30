class setDs extends Set{
	constructor(...elems){
		super(elems)
	}
	
	
	union(set2){
		
		
		const newSet=new setDs(
		...[...set2.values(),...this.values()]
		);
		
		return newSet;
	}
	
	
	difference(set2){
		const newSet=new setDs();
		this.forEach(e=>{
			if(!set2.has(e)){
				newSet.add(e);
			}
		})
		
		
		return newSet;
	}
	
	subset(set2){
		for(let it=this.values(),val=null;val=it.next().value;){
			if(!set2.has(val)){
				return false;
			}
		}
	}
	
	
}


const set=new setDs(1,2,4,5,6,7,8,9);

const set2=new setDs(7,8,9,1,0);

//console.log(set.union(set2));

//console.log(set.difference(set2));

console.log(set.subset(set2));

