class Queue{

constructor() { 
    this.data = [];
}
add(record){

this.data.unshift(record);
}
remove(){

this.data.pop();
}
}

let queue = new Queue();

queue.add(1);

queue.add(2);

queue.add(3);

console.log(queue.data);

document.getElementById("algorithm").innerHTML = "Queue";

document.getElementById("result").innerHTML = queue.data;