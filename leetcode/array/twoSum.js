 // leetcode - 1

 
 function twoSum(target, arr){
      const sum = arr.reduce((acc, curr) => acc = acc+curr ,0);
      
      const set = new Set(arr);
      const pairs = [];
      for(let i = 0; i<arr.length; i++){
          let remain = target - arr[i];
          
          if(set.has(remain)){
              const pair = [arr[i], remain]
              pairs.push(pair)
          }
      }    
  } 
  
  twoSum(9, [2,7,11,15]);