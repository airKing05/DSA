// string playlist 
// add given two number string without using parsInt

// pickup uint elemnt of both string add them get unit element and forword carrie to next and add with upcommit unit items

function addIntStr(str1, str2){
    let lastIndex1 = str1.length-1;
    let lastIndex2 = str2.length-1;
    let sum = "";
    let carrie =0;
    
    while (lastIndex1 >= 0 || lastIndex2>=0){
        let first = str1[lastIndex1] || 0;  // if the len1 index item is not exit in arr, defalut will be 0
        let second = str2[lastIndex2] || 0;
        let add = parseInt(first) + parseInt(second) + carrie;
        carrie = Math.floor(add / 10); // Math.trunc(add/10)
        let remander = add%10;
        sum = remander + sum;
       // console.log(add, carrie, remander, sum);
        lastIndex1--;
        lastIndex2--;
    }
    if(carrie){
        sum = carrie + sum;
    }
    return `${sum}`;
};

const string1 = "999";
const string2 = "333";

const result = addIntStr(string1, string2);
console.log(result);


//m1a

function addIntStr1(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;

    let i = 0;
    let j = 0;

    let carray = 0;
    let sumStr = "";

    while (i <= len1 || j <= len2) {
        let ele1 = parseInt(str1[len1 - i]) || 0;
        let ele2 = parseInt(str2[len2 - j]) || 0;
        let intSum = carray + (ele1 + ele2);

        let digit = intSum % 10;
        carray = Math.floor(intSum / 10);

        sumStr = digit + sumStr;
        //console.log(sumStr)
        i++
        j++;
    }
    if (carray) {
        let number = carray + sumStr
        return number.slice(0, -1);

    }
    //console.log();
    return sumStr.slice(0, -1);
}
const result1 = addIntStr1("999", "1");
console.log(result1);