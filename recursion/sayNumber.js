function sayNumber(n, arr) {
    //base case
    if (n == 0) {
        return;
    }
    // processing 
    let digit = parseInt(n % 10);
    n = parseInt(n / 10);
   // console.log(n, digit)

   // tell recursion
   // result could be "two one four"
   // console.log(arr[digit])

    // R.C.
    sayNumber(n, arr);
    // head recursion case
    console.log(arr[digit])


};
const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const number = 412;
sayNumber(number, arr);
