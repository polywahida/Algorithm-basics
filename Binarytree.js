class BinaryNode {
    
    constructor(data) {
    
    this.data = data;
    
    this.left = null;
    
    this.right = null;
    }
    addDataValue(data) {

        if(data < this.data && this.left){
        
        // if true
        // check left.value is not null 
        // and data less than left.value
        
        this.left.addDataValue(data);
        }
         else if(data < this.data) {
        // left.value is null
         this.left = new BinaryNode(data); 
        } else if (data < this.data && this.right) { 
            this.right.addDataValue(data);
        
        } else if (data > this.data) { 
            this.right = new BinaryNode(data);
        
        }
    }
}


const bindarNode = new BinaryNode(48); bindarNode.addDataValue(5);

bindarNode.addDataValue(52);

bindarNode.addDataValue(2);

bindarNode.addDataValue(45);

bindarNode.addDataValue(15);

bindartiode.addDataValue(-1);

bindarNode.addDataValue(-85);

bindarNode.addDataValue(8);
console.log(bindarNode)
