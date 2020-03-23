class Block{

    constructor(previousHash){
        if(previousHash===undefined){
            this.blockHeader = new BlockHeader(null,0,1);
            this.blockBody = new BlockBody();
        } else {
            this.blockHeader = new BlockHeader(previousHash,0,1);
            this.blockBody = new BlockBody();
        }
    }

    /*addTransaction(transaction){
        this.blockBody.addTransaction();
    }*/

    getBlockHeader(){
        return this.blockHeader;
    }

    getBlockBody(){
        return this.blockBody;
    }

    storeTransactions(){
        var transactions = this.blockBody.getTransactions();
        this.blockHeader.setMerkleRoot(transactions.getRoundValue());

    }

}