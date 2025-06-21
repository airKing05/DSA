// p 1512


const numberOfGoodPairs = (arr) => {
    const len = arr.length;
    
    const pairs = [];
   
    for(let i=0; i<len; i++){
       for(let j=i+1; j<len; j++){
          if(arr[i] == arr[j] && i<j){
              const pair = [i, j];
              pairs.push(pair);
          }
       }
    }
    
    console.log(pairs)
}

numberOfGoodPairs([1,2,3,1,1,3,1])


// METHOD-2

function numIdenticalPairs(nums) {
    // Initialize an array with 101 elements all set to zero
    // as the problem constraints suggest numbers between 1 and 100.
    const count = new Array(101).fill(0);

    // This will hold the total number of good pairs.
    let totalPairs = 0;

    // Iterate over each number in the input array.
    for (const number of nums) {
        // A good pair is found for each prior occurrence of the same number,
        // so we increase the totalPairs by the count of the current number seen so far.
        totalPairs += count[number];

        // Increment the count for the current number for tracking future pairs.
        count[number]++;
    }

    // Return the total number of good pairs found.
    console.log(totalPairs)
    return totalPairs;
}
numIdenticalPairs([1,2,3,1,1,3,1]);