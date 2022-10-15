// L#10 permutationPalindrome

// O(n)

// Check that given string can form a palindrome or not, while re-arenging charaters
// 1. remove the space
// 2/ create object/map
// 3. check is string is odd or even
// 3a if odd => return False (if there is more then one odd number character count)  "abcde"
// 3b if even => retun False (if there is no an even number character count of each character) "abaa"
// 4 return => True

function charCount(map) {

}
function permutationPalindrome(str) {
    str = str.split(" ").join("");
    let len = str.length;
    let map = {};
    for (let char of str) {
        map[char] = map[char] ? map[char] + 1 : 1;
    }
    if (len % 2 === 1) {
        // odd
        let count = 0
        for (let i of str) {
            if (map[i] % 2=== 1 || map[i] === 1) {
                count++
            }
            if (count > 1) {
                return false
            }
        }
    } else {
        // even
        for (let i of str) {
            console.log(map[i])
            if (map[i] % 2 !== 0) {
                return false;
            }
        }
    }

    return true;
}

const string = "acca";
const result = permutationPalindrome(string);
console.log(result);

