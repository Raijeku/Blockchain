class BlockHeader{

    constructor(previousHash, nonce, difficulty){
        this.merkleRoot = null;
        this.previousHash = previousHash;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    getHash(){
        SHA1(this.merkleRoot+this.previousHash+this.nonce);
    }

    incrementNonce(){
        found = true;
        this.nonce = this.nonce + 10;
        hashedNonce = SHA1(nonce);
        alert(nonce);
        alert(hashedNonce);
        for(i=0; i<this.difficulty; i++){
            if(hashedNonce.substring(hashedNonce.length-this.difficulty+i,hashedNonce.length-this.difficulty+i+1)!="0"){
                found = false;
            }
        }
        return found;
    }
}