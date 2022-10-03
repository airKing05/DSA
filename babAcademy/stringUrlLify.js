// L#08
// total lenght should be 13 
// "this is anilraj  " => "this%20is%20anilraj" 

function stringUrlLify(str, len) {
    // let arr = str.split(" ").join("%20");
    let newStr = "";
    for (let i = 0; i < len; i++) {
        if (str[i] === " ") {
            newStr = newStr + "%20";
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

const string = "this is anil "
const result = stringUrlLify(string, 12);
console.log("result", result);