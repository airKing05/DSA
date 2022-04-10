// not working

const reverseInt = (n) => {
    let ans = 0;
    let i = 0;
    while(n!=0){
        let digit = n%10;   //3, 2, 1

        // condition, if number is not in range of int
        // if((ans> int_max/10) || (ans<int_min/10)){
        //     return 0
        // }
        ans = ans*10 + digit; // 3, 3*10+ 2=32, 32*10+1=321 
        n = n/ 1;
        i ++;
       
    }
    return ans;
    console.log(ans)
}
const number = 123;
const result = reverseInt(number);
console.log(result);