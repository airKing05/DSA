const removeVowel = (str) =>{
      let ls = str.length;
      let vol = ['a', 'e', 'i', 'o', 'u'];
      let lv  = vol.length;
      let newStr = ""
      for(let i =0; i<ls; i++){
          for(let j=0; j<lv; j++){
              if(str[i]==vol[j]){
                newStr += "_";
              }
          }
         
            newStr += str[i];
      
        //   if(str[i]=='a'||str[i]=='e' ||str[i]=='i' ||str[i]=='o' ||str[i]=='u'){
        //       newStr += "_";
        //   }else{
        //       newStr += str[i];
        //   }
      }
      return newStr
}

const str = "anilraj";
const result =removeVowel(str);
console.log(result)