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
