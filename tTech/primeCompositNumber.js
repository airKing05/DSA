//L#14
//prime Composit Number

function primeCompositNumber(num){
    if(num===2){
        return "prime number";
    }
     for(let i=2; i<num; i++){
        if(num%i ===0){
            return "composit number"
        }else{
            return "prime number"
        }
     }
};

let number = 4;
const result = primeCompositNumber(number);
console.log("result", result);