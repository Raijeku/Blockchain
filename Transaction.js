class Transaction {
    constructor(from,to,amount){

        this.from = from;
        this.to = to;
        this.amount = amount;

    }

    getFrom(){
        return this.from;
    }

    getTo(){
        return this.to;
    }

    getAmount(){
        return this.amount;
    }
}