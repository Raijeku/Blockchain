class Blockchain {
    
    constructor(block){
        
        if(block===undefined){
            this.block = new Block();
        } else {
            this.block = block;
        }
    }

    mine(){
        var found = false; 
        while(found != true){
            var nonceInfo = this.block.getBlockHeader().incrementNonce();
            found = nonceInfo[0]
        }
        this.block.storeTransactions();
        alert("Found nonce "+nonceInfo[1].toString()+" with hash "+nonceInfo[2].toString());
        this.addBlock();
    }

    makeTransaction(from,to,amount){
        this.block.getBlockBody().addTransaction(new Transaction(from,to,amount));
    }

    addBlock(){
        this.block = new Block(this.block.getBlockHeader().getHash());
    }

    showTransactions(){
        this.block.getBlockBody().getTransactions().traverse();
    }

}