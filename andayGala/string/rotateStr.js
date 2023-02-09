// L#11 796

//A shift on s consists of moving the leftmost character of s to the rightmost position.

// Input: s = "abcde" => goal = "cdeab"
// Output: true

//         i                  j  j 
// str1 = "abcde" and str2 = "cdeab"

// itrate "j" untill it will not mathc to the "i"
// if it is match create newStr from str2[j] values 
// check newStr === str1 => true/false


// m1
// not working 
// T: O(N**2) S: O(N**2)
function rotateStr(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;

    let isRotated;

    if (len1 !== len2) {
        isRotated =  false;
    }

    let newStr = ""
    let i = 0;
    let j = 0;
    let secondIndex = []
    while (i < len1 && j < len2 || j < secondIndex[0]) {
        if (str1[i] !== str2[j]) {
            j++;
        } else {
            newStr += str2[j];
            secondIndex.push(j);
            i++;
            j++
        }
        if (j == len2) {
            j = 0;
        }
    }

    console.log(newStr)
    // if (newStr === str1) {
    //     isRotated = true;
    // }
    return isRotated;
}

const result = rotateStr("abcde", "cdeabf");
console.log(result);


//m2
// concatination 
// str1 = "abcde"+"abcde" = "abcdeabcde"
// check str2 is included inside of str1
// T: O(N) S: O(N+N) = O(N)
function rotateStr2(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }
    str1 = str1 + str1;

    return str1.includes(str2);

}

const result2 = rotateStr2("abcde", "cdeab");
console.log(result2);