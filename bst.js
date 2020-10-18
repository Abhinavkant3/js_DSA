function Node(val){
	this.value = val;
	this.left = null;
	this.right = null;
}
Node.prototype.addNode = function(n){	
	if(n.value <= this.value){
		if(this.left == null){
			this.left = n;
		}else{
			this.left.addNode(n);
		}
	}else if(n.value > this.value){
		if(this.right == null){
			this.right = n;
		}else{
			this.right.addNode(n);
		}
	}
}

Node.prototype.visit = function(){
	if(this.left != null){
		this.left.visit();
	}
	console.log(this.value);
	if(this.right != null){
		this.right.visit();
	}
}

function Tree(){
	this.root = null;
}
Tree.prototype.addNode = function(n){
	if(this.root == null){
		this.root = n;
	}else{
		this.root.addNode(n);
	}
}
Tree.prototype.traverse = function(){
	this.root.visit()
}

var tree = new Tree();
tree.addNode(new Node(5));
tree.addNode(new Node(7));
tree.addNode(new Node(3));
tree.addNode(new Node(6));
tree.traverse();