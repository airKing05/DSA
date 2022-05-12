function main(){
    for(let i=0; i<5; i++){  // i= 3, i=5, i=7
       for(let j = i; j<=5; j++){
           if(i+j == 10){   // code will scape this condition
               break;
           }
           console.log( i + " " + j);
       }
    }
}
main();