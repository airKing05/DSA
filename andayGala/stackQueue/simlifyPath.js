// L#8  71

// The canonical path should have the following format:
// The path starts with a single slash '/'.
// Any two directories are separated by a single slash '/'.
// The path does not end with a trailing '/'.
// The path only contains the directories on the path from the root directory to the target file or directory(i.e., no period '.' or double period '..')


// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.


// T: O(N) and S: O(2n) = O(N)  
class Stack{
    constructor(){
        this.stack=[];
    }

    add(val){
        this.stack.push(val);
    }

    remove(){
        this.stack.pop();
    }

    top(){

      return  this.stack[this.stack.length-1];
    }
}

function simplifyPath(path){
    let splitedPath = path.split('/').filter((item) => {
        if (item !== '.') return item;
    });

    const stack =  new Stack();
   for(let key of splitedPath){
     if(key == '..'){
        stack.remove();
     }else{
        stack.add(key);
     }
   }

    return `/${stack.top() ? stack.top() : ''}`;
}
const result = simplifyPath("/home//foo/");
console.log(result)