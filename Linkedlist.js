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
    
}         getFirst() { 
    return this.head;

}

getLast() {

if(!this.head) return null; let node = this.head; while(node) {

if(!node.next) return node; node = node.next;

}

clear();{

this.head = null;

}

removeFirst()
{

if(!this.head) return; 
this.head = this.head.next;
}
removeLast()
{
if(!this.head) return;
 if(!this.head.next) 
 { this.head = null;
  return;
}

let previous = this.head;

let nextNode = this.head.next;
while(nextNode.next) 
{ previous=nextNode;
  nextNode = nextNode.next;
 }
previous.next = null;

}

insertLast(data) ;{

 const lastNode = this.getLast();
  if(lastNode) {
     lastNode.next = new Node(data);
    } 
     else {
       this.head = new Node(data);
      }
}

getAt(index) ;{

let counter = 0;

let node = this.head;

while(node) {
   if(counter===index) return node; 
   counter++;
   node = node.next;
  }
 } 
   return null;

}

removeAt(index) {

if(!this.head) return;
if(index === 0) 
{ 
  this.head = this. head.next;
  return;
}

let previous = this.getAt(index - 1); 
if(!previous || !previous.next) return; 
previous.next = previous.next.next;
}


insertAt(data, index) {

if(!this.head) 
{ this.head= new Node(data); 
  return;

} 
if(index = 0) 
{ this.head = new Node(data, this.head);
   return;
}
let previous = this.getAt(index - 1) || this.getAt 
const node = new Node(data, previous.next); 
previous.next = node;

  [Symbol.iterator]();{ 
   let node = this.head; 
    while(node) {
    yield node; 
    node =node.next;
  }
}



function midpoint(list) {

  let slow = list.getFirst(); let fast = list.getFirst();
  
  while(fast.next && fast.next.next) { slow = slow.next; fast = fast.next.next;
  
  return slow;
  }
}
function circular(list) {

  let slow= list.getFirst();
  
  let fast= list.getFirst();
  
  while(fast.next && fast.next.next) { slow= slow.next;
  
  fast = fast.next.next;
  
  }
  
  if(slow == fast) return true; I
  
  return false;
  
  }



  let linkedList = new LinkedList(); linkedList.insertFirst('Blue1');

  linkedList.insertFirst('Green2');
  
  linkedList.insertFirst('Red3');
  
  // linkedList.removeFirst(); // linkedList.removeLast();
  
  linkedList.insertLast('Pink5');
  
  linkedList.insertAt('Black', 2); // linkedList.removeAt(1);
  
  // console.log(linkedList.nodeSize())
  
  ;
  
  // console.log(linkedList.getFirst());
  
  // console.log(linkedList.getLast()); // linkedList.clear();
  
  console.log(circular (linkedList));
  
  for(let node of linkedList) console.log(node);
}
    }
