// L#14
console.log("stackImplementation");

let data = [];
let currentSize = data.length;
let max = 5;

function pushInStack(ele){
    if(currentSize>max){
        alert("stackOverFlow, can't push: "+ ele)
    }
    else{
       // data.push(ele);
       data[currentSize]= ele;
        currentSize++;
    }
    console.log(data)
};

function popInStack(){
    if (currentSize <=0) {
        console.log("stack Empty, can't pop")
    }
    else {
        data.pop();
        currentSize--;
    }
    console.log(data)
};


pushInStack(5);
pushInStack(10);
pushInStack(15);
popInStack();
popInStack();
popInStack();
popInStack();

