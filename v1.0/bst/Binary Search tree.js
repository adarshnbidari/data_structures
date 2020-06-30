class Node{
	
	constructor(data,left=null,right=null){
		this.data=data;
		this.left=left;
		this.right=right;
	}
	
}


class BST{
	
	constructor()
	{
		this.root=null;
	}
	
	add(data){
		const node=this.root;
		
		if(node===null){
			this.root=new Node(data);
			return;
		}else{
			const searchTree=function(node)
			{
				if(data<node.data)
				{
					if(node.left===null)
					{
						node.left=new Node(data);
						return;
					}else if(node.left!==null)
					{
						return searchTree(node.left);
					}
				}else if(data>node.data){
					if(node.right===null)
					{
						node.right=new Node(data);
						return;
					}else if(node.right!==null)
					{
						return searchTree(node.right);
					}
				}else{
					return null;
				}
			}
			
			return searchTree(node);
		}
		
	}
	
	findMin(){
		let current=this.root;
		while(current!==null)
		{
			current=current.left;
		}
		return current.data;
	}
	
	findMax(){
		let current=this.root;
		while(current.right!==null){
			current=current.right;
		}
		return current.data;
	}
	
	find(data)
	{
		let current=this.root;
		while(current)
		{
			if(data===current.data)
			{
				return current;
			}
			if(data<current.data)
			{
				current=current.left;
			}
			if(data>current.data)
			{
				current=current.right;
			}
		}
		
		return current;
	}
	
	isPresent(data)
	{
		let current=this.root;
		
		while(current)
		{
			if(data===current.data)
			{
				return true;
			}
			
			if(data<current.data){
				current=current.left;
			}
			
			if(data>current.data){
				current=current.right;
			}
		}
		
		return false;
	}
	
	
	remove(data)
	{
		const removeNode=function(node,data)
		{
			
			if(node===null)
			{
				return null;
			}
			
			if(data===node.data)
			{
				if(node.left===null&&node.right==null)
				{
					return null;
				}
				
				if(node.left===null)
				{
					return node.right;
				}
				
				if(node.right===null)
				{
					return node.left;
				}
				
				var tempNode=node.right;
				
				while(tempNode.left!==null)
				{
					tempNode=tempNode.left;
				}
				
				node.data=tempNode.data;
				
				node.right=removeNode(node.right,tempNode.data);
				
				return node;
				
			}else if(data<node.data){
				node.left=removeNode(node.left,data);
				return node;
			}else if(data>node.data){
				node.right=removeNode(node.right,data);
				return node;
			}
			
		}
		
		this.root=removeNode(this.root,data);
	}
	
	
	findMinHeight(node=this.root){
		if(node===null){
			return -1;
		}
		
		
		let left=this.findMinHeight(node.left);
		let right=this.findMinHeight(node.right);
		
		if(left<right){
			return left+1;
		}else{
			return right+1;
		}
		
	}
	
	
	findMaxHeight(node=this.root){
		if(node===null){
			return -1;
		}
		
		
		let left=this.findMaxHeight(node.left);
		let right=this.findMaxHeight(node.right);
		
		if(left>right){
			return left+1;
		}else{
			return right+1;
		}
		
	}
	
	isBalanced(){
		return (this.findMinHeight()>=this.findMaxHeight()-1);
	}
	
	inorder(){
		if(this.root===null){
			return null;
		}
		
		let result=[];
			
		function traverseInorder(node){
			node.left&&traverseInorder(node.left);
			result.push(node.data);
			node.right&&traverseInorder(node.right);
		}
		
		
		traverseInorder(this.root);
		return result;
		
	}
	
	preorder(){
		if(this.root===null){
			return null;
		}
		
		let result=[];
			
		function traversePreorder(node){
			result.push(node.data);
			node.left&&traversePreorder(node.left);			
			node.right&&traversePreorder(node.right);
		}
		
		
		traversePreorder(this.root);
		return result;
		
	}
	
	postorder(){
		if(this.root===null){
			return null;
		}
		
		let result=[];
			
		function traversePostorder(node){
			node.left&&traversePostorder(node.left);	
			node.right&&traversePostorder(node.right);
			result.push(node.data);
			
		}
		
		
		traversePostorder(this.root);
		return result;
		
	}
	
	levelorder(){
		let result=[];
		let q=[];
		
		if(this.root!==null){
			q.push(this.root);
			while(q.length>0){
				let node=q.shift();
				result.push(node.data);
				
				if(node.left!==null){
					q.push(node.left);
				}
				if(node.right!==null){
					q.push(node.right);
				}
			}
			
			return result;
			
		}else{
			return null;
		}
		
	}
	
	
}


var bst=new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);




console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log(bst.inorder());
console.log(bst.preorder());
console.log(bst.postorder());
console.log(bst.levelorder());

//console.log(bst.find(6));