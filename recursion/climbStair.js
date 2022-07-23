// l#2
// need to reach the target on stair case
// can move two jump or one jump up

function stair(tar){
   if(tar<0){
    return 0;
   }
   if(tar == 1){
    return 1;
   }
   let ans = stair(tar-1)+stair(tar-2)
   return ans
};
const targetStair = 4;
const whoManyTypeOfStep = stair(targetStair);
console.log(whoManyTypeOfStep)