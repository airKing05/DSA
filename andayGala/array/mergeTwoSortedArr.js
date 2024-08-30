// L#18 88

// Merge nums1 and nums2 into a single array sorted in non - decreasing order.
// without using any extra space

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.nums2 has a length of n.



// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]
// Explanation: The arrays we are merging are[1, 2, 3] and[2, 5, 6].
// The result of the merge is[1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.



// two pointer
//                        num2[s]>num1[f] 
//nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
//               f=m-1    i                         s=n-1
//                      i                         s
//                  i                         s
//            f  i
//            i                            s : now s is out of the loop=> meains aaray is merge sorted


//T: O(m+n)= O(n) and S:O(1)

function mergeTwoSortedArr(arr1, m, arr2, n) {
    let first = m - 1;
    let second = n - 1;
    let i = m + n - 1; // arr1.length - 1; // m+n-1

    
    while (second >= 0) {
        let fVal = arr1[first];
        let sVal = arr2[second];

        if (fVal > sVal) {
            arr1[i] = fVal;
            first--;
            i--;
        } else {
            arr1[i] = sVal;
           second--;
            i--;
        }
      
    }
    return arr1;
}

const result = mergeTwoSortedArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(result);