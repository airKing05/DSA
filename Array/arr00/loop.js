let arr = [2,6,8,6,9];
let l = arr.length;
// for (let i=0; i<l; i++){
//     if(i===3){
//     console.log("hello")
//      }
//      console.log(arr[i], i);
//  }

arr.forEach(function(element, index, array){
    
     console.log(element, index, array)
});

let object = {
    name: 'anilraj',
    class: 'abcd',
    number: 9632587410
}
for (const key in object) {
    console.log(`${key} is and value of key is ${object[key]}`)
}


for (let iterator of arr) {
    console.log(iterator, arr)
}