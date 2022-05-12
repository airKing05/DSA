function fibonacci(n){
    let a = 0;
    let b = 1;
    let next;
    console.log(a)
    console.log(b)
    for(let i=2; i<n; i++){
      next = a + b;
      a = b;
      b = next;
      console.log(next)
    }
};

const number = 20;
fibonacci(number);


