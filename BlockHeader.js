class BlockHeader{

    constructor(previousHash, nonce, difficulty){
        this.merkleRoot = null;
        this.previousHash = previousHash;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    getHash(){
        return SHA1(this.merkleRoot+this.previousHash+this.nonce);
    }

    incrementNonce(){
        var found = true;
        this.nonce = this.nonce + Math.floor(Math.random() * 10);
        var hashedNonce = SHA1(this.nonce.toString());
        console.log(this.nonce);
        console.log(hashedNonce);
        for(var i=0; i<this.difficulty; i++){
            if(hashedNonce.substring(hashedNonce.length-this.difficulty+i,hashedNonce.length-this.difficulty+i+1)!="0"){
                found = false;
            }
        }
        return [found,this.nonce,hashedNonce];
    }

    setMerkleRoot(merkleRoot){
        this.merkleRoot = merkleRoot;
    }
}