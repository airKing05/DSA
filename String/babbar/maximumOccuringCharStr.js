// find the charactur in string how has maximum number of occurring
// does not working 

// space complexity is S(26) == constant; we are using an extra array 
// time complexity first loop; running for str length => O(n)
// time complexity second loop; running for arr length which is 26; constant =>O(1)
const getMaxOccChar = (str) => {
    let strLen = str.length;

    // assigning 0 to an array 26 times
    let arr = new Array(26).fill(0)
    
    //console.log(arr);

    // creating an array count of char
    for(let i=0; i< strLen; i++){
        let number = 0;
        let char = str[i]
        // for lower case
        if(char>='a' & char<='z'){
            number = char - 'a' ;
            console.log(number)
        }
        // for upper case
        else{
            number = char - 'A' ;
        };
        arr[number]++;
    }

    // find maxi occurring char
    for(let i=0; i<26; i++){
        let maxi = -1; ans = 0;
        if(maxi< arr[i]){
            ans = i
            maxi = arr[i];
        }
    }


    // get ans
    let finalAns = 'a' + ans;
    return finalAns;



}

let character = 'abcbafff'
let result = getMaxOccChar(character);
console.log(result)