class MerkleTree {
    constructor(rootNode,previousTree) {
        
        if(previousTree===undefined){
            this.rootNode = rootNode;
            this.previousTree = null;
            this.count = 1;
            this.level = 0;
            this.childNode = this.rootNode;
            this.lastNode = null;
        } else if (rootNode===undefined && previousTree===undefined) {
            this.rootNode = null;
            this.previousTree = null;
            this.count = 0;
            this.level = 0;
            this.childNode = null;
            this.lastNode = null;
        } else {
            this.rootNode = rootNode;
            this.previousTree = previousTree;
            this.count = 1;
            this.level = 0;
            this.childNode = rootNode;
            this.lastNode = null;
        }
        
    }

    getRootNode(){
        return this.rootNode;
    }

    getRoundValue(){
        if(this.count % 2 != 0){
            this.addNode(this.lastNode.getValue());
        }
        if(this.previousTree===null){
            return SHA1(this.rootNode.getValue());
        } else{
            return SHA1(this.rootNode.getValue()+this.previousTree.getRoundValue());
        }
    }

    setRootNode(rootNode){
        this.rootNode = rootNode;
    }

    getNodeCount(){
        return this.count;
    }

    addNode(data){
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
        
    }

}