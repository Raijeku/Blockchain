nodetest1 = new MerkleNode("y1");
nodetest2 = new MerkleNode("y2");
nodetested = new MerkleNode(nodetest1,nodetest2);
nodetested1 = new MerkleNode(nodetest1,nodetested);
treetest = new MerkleTree(nodetested1);
treetest1 = new MerkleTree(nodetested,treetest);

transaction = new Transaction("me","you",5);
blockchain = new Blockchain();

function testit(){
    alert(treetest.getRoundValue());
}

function makeTransaction(){
    from = document.getElementById("from").value;
    to = document.getElementById("to").value;
    amount = document.getElementById("amount").value;
    blockchain.makeTransaction(from,to,amount);
}

function mine(){
    blockchain.mine();
}

function showTree(){
    console.log("Showing tree");
    blockchain.showTransactions();
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