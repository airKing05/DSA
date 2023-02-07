// l#1
// arr = [2,7,11,15] target = 9
// output = [0,1]

// find the sum of two elements is equal to the targets
// approch- 1.brout fourch approch in tsdsa and Array/arr01/babbar01
// 2. two pointer case 1 and 2 tsdsa
// 3. by hash map
//T: O(N) S:O(N)
function checkSumEqaulTarget(arr, t){
let len = arr.length;
let obj= {}
for(let i=0; i<len; i++){
    obj[arr[i]] = i
};
let indexArr = [];
for(let i=0; i<len; i++){
    let Potentialkey = t-arr[i]
    if (obj[Potentialkey] && obj[Potentialkey] !== i){
        indexArr.push(i, obj[Potentialkey])
    }
}
return indexArr

}
const result = checkSumEqaulTarget([9,4 , 2, 7, 11, 15], 9);
console.log(result)




