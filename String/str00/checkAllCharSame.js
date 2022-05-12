const checkAllCharSame = (str) =>{
    let l = str.length;
   for (let i=0; i<l; i++ ){
        if(str[i]==str[i+1]){
            return true
        }else{
            return false
        }
   }
    
}

const str = "aaa";
const result = checkAllCharSame(str);
console.log(result)
