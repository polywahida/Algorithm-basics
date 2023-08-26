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
        return null;
    }
    FindData(data) {

        if(this.data = data) return this; 
        if(this.data < data && this.right) {
            return this.right.findData(data); }
            else if(this.data> data && this. left) 
            { return this.left.findData(data);
    
             return null;
            }
        }
    }      
    
    
    _insertNode(node, newNode) 
    {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    find(data); {
        return this._findNode(this.root, data);
    }

    _findNode(node, data) 
    {
        if (!node) {
            return null;
        }

        if (data === node.data) {
            return node;
        } else if (data < node.data) {
            return this._findNode(node.left, data);
        } else {
            return this._findNode(node.right, data);
        }
    }

    validateNodeCheck(node, min = -Infinity, max = Infinity)
     {
        if (!node) {
            return true;
        }

        if (node.data <= min || node.data >= max) {
            return false;
        }

        return (
            this.validateNodeCheck(node.left, min, node.data) &&
            this.validateNodeCheck(node.right, node.data, max)
        );
    }



const tree = new BinaryTree();
tree.add(50);
tree.add(30);
tree.add(70);
tree.add(20);
tree.add(40);

console.log(tree.find(40));

console.log(tree.validateNodeCheck(tree.root)); 
       

const bindarlode = new bindarlode (40); 
 bindarlode.right = new BinaryNode(52); 
 bindarlode.left = new BinaryNode(5); 
 bindarlode.right.left = new BinaryNode(-3);
 bindarlode.right.right = new BinaryNode(85);
        
//    bindarlode.addDataValue(5);
 
//    BinaryNode.addDataValue(52);

//    BinaryNode.addDataValue(2);

//    BinaryNode.addDataValue(45);

//    BinaryNode.addDataValue(15);

//    bindartiode.addDataValue(-1);

//    bindarNode.addDataValue(-85);

//    bindarNode.addDataValue(8);
//    console.log(bindarNode)
//    console.log(bindarNode.findData(15));
 