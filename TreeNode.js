class TreeNode{

    constructor(data) {
        this.data = data; 
         this.children = [];
    
    }
    add(data){
    this.children.push(new TreeNode(data));
    }
    remove(data) {

         this.children = this.children.filter(node => { 
            return node.data = data
        
        }
      )}
    }      
    class Tree{ 
        constructor() {

              this.root = null;
        
        }
        
        traverseBFS(fn){
        
        const arr = [this.root]; 
        while(arr.length){
          const node = arr.shift();
         arr.push(...node.child);
          fn(node);
          }
        }
        traverseDFS(fn){
         const arr = [this.root]; 
          while(arr.length){
            const node = arr.shift();
           arr.unshift(...node.child);
            fn(node);
            }
          }


      }
       const numbers1 = [];
       const numbers2 = [];
       const tree = new Tree() 
       tree.root = new TreeNode(1);
        
        tree.root.add(4);
        
        tree.root.add(6);
        
        tree.root.add(5);
        
        tree.root.add(8);
        
        tree.root.children[2].add(44);
        tree.root.children[2].add(45);
        tree.root.children[3].add(65);
        
        tree.traverseBFS(node => { 
            numbers1.push(node.data);
        });

        tree.traverseDFS(node => { 
          numbers1.push(node.data);
      });
       function levelwidth(root) {

        const arr = [root, 'r'];
        
        const counters = [0];
        
        console.log('Counter', counters);
        
        while(arr.length > 1) {
        
        const node = arr.shift(); 
        if(node === 'r') 
        { counters.push(0);
        
        arr.push('r');
        
        } else {
        
        arr.push(...node.children); 
       counters[counters.length-1]++;
       }
       }
        return counters;
       }
       root.left<root
       root.right>root
       
        console.log("BFS", numbers2);
        console.log("DSF", numbers1);
        console.log('Width,levelWidth');
        

    