let arr = [1,2,3,4,5];
let l = arr.length;
let sum = 0;
let avg = 0;
let newlist = [];
let newl = 0;

for(let i=0; i<l; i++){
    if(arr[i]%2==0){
        console.log(arr[i])   
    }
   else{
      sum = sum + arr[i];
      newlist.push(arr[i]);
      newl = newlist.length;
      avg = sum / newl
   }
}

console.log(newlist+  " element on new list of vishm number "+ newl +" sum of visham " + sum + " and average of it is :" + "" + avg)



//m2 count the odd even number by reduce method
// a small error is here;

const coubtOddEven = (arr, fn) => {
    let evenCount = 0
    let oddCount = 0
    let countSmall = arr.reduce((acc, curr, index, array) => {
        let props = fn(curr)
        if (fn(curr) === 'even') {
            evenCount++
            console.log(acc)
            acc[props] = evenCount // this line is not working
        } else {
            oddCount++
            acc[props] = oddCount
        }
    }, { 'even': 0, 'odd': 0 })

    return countSmall;
}
const result1 = coubtOddEven([0, 8, 1, 2, 4, 8, 5, 6, 12, 9], oddEven)
console.log(result1)

