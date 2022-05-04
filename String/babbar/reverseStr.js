const reverse = (str) => {
    let l = str.length;
    let s = 0;
    let e = l - 1

    while (s < e) {
        [str[s], str[e]] = [str[e], str[s]]
        console.log([str[s], str[e]])
        console.log(str[e])
        s++;
        e--;
      
    }
    return str

};
const string = "anilraj"
const result = reverse(string);
console.log(result);