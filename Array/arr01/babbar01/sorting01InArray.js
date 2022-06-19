// [0,1,0,1,0,0]==>[0,0,0,0,1,1]
// approach 1, normal sorting
// approach 2, counting 0,1 occurrence and put them into array
// approach 3, two pointer=> point1=>arr[0]=i, point2=>arr[l-i+1]=j
// then find sort array by shifting pointer foreword(i++) and beckword(j--) or swapping each other


const sorting01InArray = (arr) => {
    let l = arr.length;
    let i = 0;
    let j = l - 1;
    while (i < j) {
        if (arr[i] == 0 && arr[j] == 1) {   // optimization 
            i++;
            j--;                 // no need to go farther
        }
        else if (arr[i] == 1 && arr[j] == 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j--;

        }
    }

    return arr;

};

// const array = [0,1,0,1,0,1,0,1];   // [1,1,0,1,0,1,0,1] ,[1,1,0,1,0,1,0,0]not working for this condition
// const result = sorting01InArray(array); 
// console.log(result)


const sorting01InArray1 = (arr) => {
    let l = arr.length;
    let left = 0;
    let right = l - 1;
    let step = 0;
    while (left < right) {   
        console.log("step:" + step)
        step++
        console.log(arr)
        while (arr[left] === 0 && left < right) {   // second condition should not be false
            left++;
        }
        while (arr[right] === 1 && left < right) {
            right--;
        }

        // after this if you reached out here
        // it means arr[left]==1 , arr[right]==0
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++;
            right--;
        }

    }

    return arr;

};

const array1 = [1, 1, 0, 0, 0, 0, 1, 0];
const result1 = sorting01InArray1(array1);
console.log(result1)