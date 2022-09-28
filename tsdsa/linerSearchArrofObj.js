//L#14
// linerSearch Array of Objects
// O(n)

const users = [
    {name: "anilraj", email: "aniraj@gamil.com", age: 25},
    { name: "monty", email: "monty@gamil.com", age: 12 },
    { name: "ajay", email: "ajay@gamil.com", age: 12 }
];

function linerSearchArrofObj(arr, key){
    for(let i=0; i<arr.length; i++){
       if(arr[i]['name']===key){
        return true
       }
    }
    return false
} 

const userName = "anilraj"
const result = linerSearchArrofObj(users, userName);
console.log(result)