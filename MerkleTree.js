class MerkleTree {
    constructor(rootNode,previousTree) {
        
        if(previousTree===undefined){
            this.rootNode = rootNode;
            this.previousTree = null;
            this.count = 1;
        } else if (rootNode===undefined && previousTree===undefined) {
            this.rootNode = null;
            this.previousTree = null;
            this.count = 0;
        } else {
            this.rootNode = rootNode;
            this.previousTree = previousTree;
            this.count = 1;
        }
        
    }

    getRootNode(){
        return this.rootNode;
    }

    getRoundValue(){
        if(this.previousTree===null){
            alert(this.rootNode.getValue());
            return SHA1(this.rootNode.getValue());
        } else{
            return SHA1(this.previousTree.getRoundValue()+this.rootNode.getValue());
        }
    }

    setRootNode(rootNode){
        this.rootNode = rootNode;
    }

    getNodeCount(){
        return this.count;
    }

    addNode(data){

        var newNode = new MerkleNode(data);
        if(this.rootNode == null){
            this.rootNode = newNode;
        } else {
            this.insertNode(this.rootNode, newNode);
        }
        
    }

    insertNode(currentNode, newNode){
        if(this.count % 2 != 0){
            if(currentNode.getLeft() === null){
                currentNode.setLeft(newNode);
            } else {
                this.insertNode(currentNode.getLeft(),newNode);
            }
        } else {
            if(currentNode.getRight() === null){
                currentNode.setRight(newNode);
            } else {
                this.insertNode(currentNode.getRight(),newNode);
            }
            currentNode.setValue(SHA1(currentNode.getLeft().getValue()+currentNode.getRight().getValue()));
        }
        this.count = this.count + 1;
    }

    traverse(){
        this.preorder(this.rootNode);
    }

    postorder(node) 
    { 
        if(node != null) 
        { 
            this.postorder(node.getLeft()); 
            this.postorder(node.getRight()); 
            console.log(node.getValue()); 
        } 
    } 

    preorder(node) 
    { 
        if(node != null) 
        { 
            console.log(node.getValue()); 
            this.postorder(node.getLeft()); 
            this.postorder(node.getRight()); 
        } 
    } 

    /*addNode(data){
        if(this.count % 2 == 0){
            this.childNode.setRight(new MerkleNode(data));
            this.childNode.setValue(SHA1(this.rootNode.getLeft()+this.rootNode.getRight()));
        } else {
            isAssigned = False;
            this.rootNode = new MerkleNode(null,this.rootNode);
            this.count += 1;
            if (count > Math.pow(2,this.level)){
                newNode = new MerkleNode(data);
                for(i = 0; i<level; i++){
                    newNode = new MerkleNode(null,newNode);
                    this.lastNode = newNode;
                    if (!isAssigned){
                        this.childNode = newNode;
                        isAssigned = True;
                    }
                }
                this.rootNode.setRight(newNode);
                this.rootNode.setValue(SHA1(this.rootNode.getLeft()+this.rootNode.getRight()));
                this.level += 1;
            } else {
                this.childNode = this.rootNode;
            }
            
        }
        this.count += 1;
        
    }*/

}