function LinkedList(){
	
	var length=0;
	var head=null;
	
	var Node=function(element){
		this.element=element;
		this.next=null;
	};
	
	this.size=function(){
		return length;
	}
	
	this.head=function(){
		return head;
	}
	
	this.add=function(element){
		
		var node=new Node(element);
		
		if(head===null){
			head=node;
		}else{
			var currentNode=head;
			
			while(currentNode.next){
				currentNode=currentNode.next;
			}
			
			currentNode.next=node;
			
		}
		
		length++;
		
	};
	
	this.remove=function(element){
		var currentNode=head;
		var previousNode;
		
		if(head===null){
			return null;
		}
		if(element===currentNode){
			head=currentNode.next;
		}else{
			while(currentNode.element!=element){
				previousNode=currentNode;
				currentNode=currentNode.next;
			}
			
			previousNode.next=currentNode.next;
			
		}
		
		length--;
	};
	
	
	this.addAt=function(element,index){
		var node=new Node(element);
		var count=0;
		var currentNode=head;
		var previousNode;
		
		if(index>length){
			return false;
		}
		
		if(index===0){
			node.next=currentNode;
			head=node;
		}else{
			while(count<index){
				count++;
				previousNode=currentNode;
				currentNode=currentNode.next;
			}
			
			node.next=currentNode;
			previousNode.next=node;
			
		}
		
		length++;
	};
	
	this.removeAt=function(index){
		var currentNode=head;
		count=0;
		var previousNode;
		
		if(index<0||index>length){
			return false;
		}
		
		if(index===0){
			head=currentNode.next;
		}else{
			while(count<index){
				count++;
				previousNode=currentNode;
				currentNode=currentNode.next;
			}
			
			previousNode.next=currentNode.next;
			
		}
		
		length--;
		
	};
	
	//custom function
	
	this.indexOf=function(element){
		var currentNode=head;
		var index=-1;
		
		while(currentNode){
			index++;
			if(currentNode.element===element){
				return index;
			}
			currentNode=currentNode.next;
		}
		
		return -1;
	};
	
	this.isEmpty=function(){
		return length===0;
	};
	
	this.elementAt=function(index){
		var currentNode=head;
		var count=0;
		
		while(count<index){
			count++;
			currentNode=currentNode.next;
		}
		
		return count;
		
	};
	
	this.print=function(){
		var currentNode=head;
		
		var list=head.element+" => ";
	
		
		while(currentNode.next){	
				
			currentNode=currentNode.next;
			list+=currentNode.element+" => ";	
			
		}
		
		
		return list+" null";
		
		
	}
	
}


var lst=new LinkedList();

lst.add(10);

lst.add(20);

lst.add(30);

lst.add(40);

console.log(lst.print());

lst.addAt(50,0);

console.log(lst.print());

console.log(lst.isEmpty());

console.log(lst.size());
console.log(lst.head());


lst.removeAt(0);

console.log(lst.print());

console.log(lst.indexOf(20));

