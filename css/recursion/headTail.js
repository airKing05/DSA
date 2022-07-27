// l#12
// head tail recursion


function test(x){
    console.log(x); // this tail recursion
    if(x>0){        // processing 
        test(x-1) 
    }
    console.log(x); // head recursion
}
test(5);
// tails = 5,4,3,2,1,0, console phle ho rha hai fr uske baad me function apne aapko call kr rha hai
// head = 0,1,2,3,4,5, console function call hone ke baad me aa rha hai, to jab tak basic condition match nahi jo jati tan tak function exicution hota rhega call stack ke andar, fir jaise hi besic condition mathc hoti to sb se phle basic constion exicute hogi (1) fir 5 tak ahjayega

// i have decent experienced in developing front end projects, delivering amazing UI / UX's , and have worked on decent front end optimisations wrt to some of the best frameworks used, would love to join u guys aiming to deliver my best