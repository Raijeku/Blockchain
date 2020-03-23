class BlockBody{

    constructor(){
        this.transactions = new MerkleTree();
    }

    addTransaction(transaction){
        alert("Transaction from "+transaction.getFrom()+" to "+transaction.getTo()+" made for an amount of "+transaction.getAmount()+"BTC.");
        this.transactions.addNode(transaction);
    }

    getTransactions(transactions){
        return this.transactions;
    }

}