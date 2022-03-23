// need to count how many lower, upper, numeric & special Character exist on the given string

function countCharType(str) {
    let len = str.length;
    var arr = str.split('')
    let u =0; 
    let l =0;
    let n =0;
    let s =0;
    let ns = ""
   for(let i=0; i<len; i++){
    //    if(arr[i]==str.charAt(i).toUpperCase()){
    //      return ns+=arr[i]
    //    }
       switch(s.at(i)) {
        case 'a' ... 'z':
            lowercase++;
        break;
        case 'A' ... 'Z':
            upperCase++;
        break;
        case '0' ... '9':
            numeric++;
        break;
        default:
            special++;
        break;
    }
   }
    
}

const string = "Anil4Raj*Meena^"
const result = countCharType(string);
console.log(result);