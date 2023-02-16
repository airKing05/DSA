// L#5 5

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"


//m1 brought forth approach
// find each sub string and check

// T: O(N**3) and S:O(N**2)


// m2
// for the odd palidrome
//              "babad"
//              <- i ->  //match the value of indexes    // can move in-out or out-in

// for the even palidrome
//             "c b b d"
//               i-1i   // check from here 


// oddDrome = getDrome(i-1, i+1, str)
// evenDrome = getDrome(i-1, i , str)
//currMax = max(oddDrome, evenDrome);
//totalMax = max(currMax, totalMax)

// T: O(N**2) and S:O(N)=> whole str could be a palindrome


function getDrome(left, right , str){
    while(left>=0 && right<str.length){
        if(str[left] !==str[right]) break;
        left--;
        right++;
    };

    return [left+1, right];
}
function longestPalindromicSubstr(str) {
    let len = str.length;
    let max = [0, 1];

    for (let i = 0; i < len; i++) {
        let oddDrome = getDrome(i - 1, i + 1, str);
        let evenDrome = getDrome(i - 1, i, str);

        let currMax = oddDrome[1]-oddDrome[0] > evenDrome[1]-evenDrome[0] ? oddDrome: evenDrome;

        max = currMax[1]-currMax[0] > max[1]-max[0] ? currMax: max;
    }
return str.slice(max[0], max[1]);
}
const result = longestPalindromicSubstr("babad");
console.log("result1",result);