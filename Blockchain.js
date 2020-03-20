class Blockchain{
    
    constructor(nextBlock){
        
        if(nextBlock===undefined){
            this.nextBlock = new Block();
        } else {
            this.nextBlock = nextBlock;
        }
    }

    mine(){
        if(this.nextBlock.getBlockHeader().incrementNonce() == true){
            alert("found");
        }
    }

    makeTransaction(from,to,amount){
        this.nextBlock.addTransaction(new Transaction(from,to,amount));
    }

}