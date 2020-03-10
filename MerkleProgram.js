nodetest1 = new MerkleNode("y1");
nodetest2 = new MerkleNode("y2");
nodetested = new MerkleNode(nodetest1,nodetest2);
nodetested1 = new MerkleNode(nodetest1,nodetested);
treetest = new MerkleTree(nodetested1);
treetest1 = new MerkleTree(nodetested,treetest);

var trees = [];



function testit(){
    alert(treetest.getRoundValue());
}

class MerkleProgram {
    constructor(n){
        this.headTree = new MerkleTree();
        this.n = n;
    }

    addTransaction(from,to,amount) {  
        
        this.headTree.addNode(new Transaction(from,to,amount));
        
    }
}