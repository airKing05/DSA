// p-- 14

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


var longestCommonPrefix1 = function (strs) {
    const arr = strs;
    let len = arr.length;

    let str = ''
    let item = arr[0];
    for (let p = 0; p < item.length; p++) {
        let chr = item[p];
        let isExistToAll = false
        for (let j = 1; j < len; j++) {
            let _item = arr[j];

            if (chr === _item[p]) {
                isExistToAll = true;

            } else {
                isExistToAll = false;
                //   str.substring(0,str.length-1);
            }
        }

        if (isExistToAll) {
            str += chr
        } else {
            str.substring(0, str.length - 1);
        }
    }
    console.log("commonChr", str)

    return str;
};

const result1 = longestCommonPrefix1(["flower", "flow", "flight"])