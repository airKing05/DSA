// creating an new stack
// need to creat constractor fot it
class Stack {
     constructor(){
         this.item = [];
     }
     
     // add element to stack
     add(element){
         return this.item.push(element);
     };

     // remove element to stack
     remove(){
         if (this.item.length > 0) {
             return this.item.pop();
         } else {
             return "no element present in stack"
         }
        
     };

     // top element of stack
     peek(){
         if (this.item.length > 0) {
             return this.item[this.item.length - 1] 
         } else {
             return "no element present in stack"
         }
     }

     // size of stack
     size(){
         return this.item.length;
     }

     // is empty or not 
     isEmpty(){
         if (this.item.length > 0){
             return false
         }else{
             return true
         }
     }

     // clear stack
     clear(){
         //return this.item.length = 0
         return this.item = [];
     }

}
const stack = new Stack();

// add element to stack 
stack.add(2)
stack.add(4)
stack.add(8)
console.log(stack.remove())
console.log(stack.size());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.clear());
console.log(stack.size());
stack.add(24)
console.log(stack.size());

