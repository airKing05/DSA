function stringToLowerCase(str) {
    let l = str.length;
    for(let i=0; i<l; i++){
        if( str[i]>='A' && str[i]<='Z')
            str[i] += 'a' - 'A';
            console.log(str[i])
    }
    return str;
}

const string = "AnilRaj"
const result = stringToLowerCase(string);
console.log(result);
