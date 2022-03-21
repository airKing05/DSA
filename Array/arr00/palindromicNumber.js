function palindromicNumber(arr) {
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        let num = arr[i];
        let rev = 0;
        while (num) {
            rev = rev * 10 + num % 10;
            num /= 10;
        }
        if (rev !== arr[i])
            return 0;
    }
    return 1;

}

const arr = [111, 222, 444]
result = palindromicNumber(arr);
console.log(result);