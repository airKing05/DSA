// find the uniq element in the array 
// size of array is 2m+1, m number are repeating 

// not working also O(n)= n**2
const uniqElement = (arr) =>{
    let l = arr.length;
   
    for(let i=0; i<l; i++){
        let point = arr[i];
        for(let j =1; j<l; j++){
            if(point === arr[j]){
                point = arr[i+1]
                
            }else{
                return point
            }
        }
    }
};

// xor=> 1^1=0; 0^1= 1
// 1^2^3^2^3^1^4 = 0^0^0^4=4

const uniqElementXOR = (arr) =>{
    let l = arr.length;
    let ans = 0;
    for(let i=0; i<l; i++){
        ans = ans^arr[i];
    }
    return ans
};
const arr = [1,2,3,2,3,1,4];   // print 4
const result = uniqElementXOR(arr);
console.log(result)