const swapAlterElement = (arr) =>{
    let l = arr.length;
    for(let i=0; i<l; i+=2){
        if(i+1<l){
            [arr[i], arr[i+1]] =[arr[i+1], arr[i]];
        }
       //console.log([arr[i+ (2*i)], arr[i+(2*i+1)]] = [arr[i+(2*i+1)], arr[i+ (2*i)]]) 
    }
    return arr
};

const arr = [1,2,3,4,5,6,7,8];
const result = swapAlterElement(arr);
console.log(result)