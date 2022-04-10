function main(){
    for(let i=0; i<=15; i+=2){  // i= 3, i=5, i=7
        // here i =0
        console.log(i+ " ");  // print  3, 5
        if(i&1){              // 3&1   5& 1
            continue;
        }
        i++;                 // now it is not reachable 
        // here i = 1 
    }
}
main();