const oprator = (a, b) =>{
    return `a&b is ${a && b};
            a|b is ${a | b};
            ~a is ${~a};
            a^b is ${a ^ b};`

};

const a = 2;
const b = 4;

const result = oprator(a,b);
console.log(result);