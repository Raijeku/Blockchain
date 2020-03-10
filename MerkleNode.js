class MerkleNode {
    
    constructor(value,left,right) {
        if (left===undefined && right===undefined){
            this.left = null;
            this.right = null;
            this.value = value;
        } else {
            this.left = value;
            this.right = left;
            this.value = SHA1(this.left.value+this.right.value);
        }
    }

    getValue(){
        return this.value;
    }

    setValue(value){
        this.value = value;
    }

    getLeft(){
        return this.left;
    }

    setLeft(left){
        this.left = left;
    }

    getRight(){
        return this.right;
    }

    setRight(right){
        this.right = right;
    }
    
}