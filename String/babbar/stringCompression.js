// very important question asked directly 
// // not working 
// can not use extra space
// count will store in single digit only a-12 times ['a', '1', '2']


const stringCompression = (str) =>{
    let  i = 0 // to traversing the string
    let stringIndex = 0;
    let len = str.length;

    while(i<len){
        let j = i+1;
        while(j<n & str[i]==str[j]){
            j++;
        }
        //yha kab aaoge?
        // yato str puri treverse ho gyi hogi
        // ya new / different charcture encounter huaa hoga / mila hoga

        // oldchar store krlo
        str[stringIndex] = str[i]

        // count of char
        let count = j-1;

        if(count>1){
            // converting count into single digit ans saving in to ans
            let cnt = toString(count);
            for(const ch in cnt) {
               str[stringIndex] = ch;           
             }
            }

            // moving to new different char
            i=j;
        }
    }
   
}


let string = ['a', 'a', 'a', 'b', 'c', 'c', 'd','d']
// 'aaabbbcdd'
// return some thing like 'a3b3cd2'
// ['a', '3', 'b', 'c', '2', 'd','2']
let result = removeSpaceAddSymbol(string);
console.log(result)
