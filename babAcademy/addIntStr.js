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