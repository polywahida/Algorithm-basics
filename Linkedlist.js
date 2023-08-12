class Node {

    constructor(data, next = null) { 
        this.next = next;
        this.data = data;
    
      }
}
    
    class LinkedList { 
        constructor() { 
            this.head= null;
        }
          insertFirst(data) {
    
          const node = new Node(data, this. head); 
          this.head = node;
        } 
        nodeSize(){
    
        let counter = 0;
         let node = this.head;
          while(node) {
    
          counter++,
            node = node.next;
          } return counter;
    
            getFirst();
             {
            return this.head;
           }  
           getLast(); {
    
            if(!this.head) return null;
            
            let node = this.head;
            
            while(node) {
            
            if(!node.next) return node;
            
            node= node.next;
            }
    }     
    clear();{
        this.head = null;
    }
} 
 }

    let linkedList= new linkedList();
    
    linkedList.insertFirst(1);
    
    linkedList.insertFirst(2);
    
    linkedList.insertFirst(3);
    
    console.log(linkedList.nodeSize());
    
    console.log(linkedList.getFirst()); console.log(linkedList.getLast());
    
    // console.log(linkedList);
    