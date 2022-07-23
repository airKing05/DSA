// l#2

function fibonacci(n) {
    if (n == 0) {
        return 0;
    } if (n == 1) {
        return 1;
    }
    // let arr = []
    let ans = fibonacci(n - 1) + fibonacci(n - 2);
  // console.log(ans)
    return ans;

};
const limit = 6;
for (i=0; i <= limit; i++) {
    console.log(fibonacci(i));
}
// const result = fibonacci(limit);
// console.log(result);
