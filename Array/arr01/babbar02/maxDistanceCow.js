// find a largest minimum distance between two cows


function isPossible(arr, k, mid) {
    let cowCount = 1;
    let lastPos = arr[0];
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] - lastPos >= mid) {
            cowCount++;
            if (cowCount == k) {
                return true
            }
            lastPos = arr[i];
        }
    }
    return false;
}


const maxDistanceCow = (arr, k) => {
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = Math.max(...arr);
    let mid = start + (end - start) / 2
    let ans = -1;
    while (start < end) {
        if (isPossible(arr, k, mid)) {
            ans = mid;
            start = mid + 1;
        } else {
            end = mid - 1
        }
        mid = start + (end - start) / 2

    }
    return ans
};

const arr = [2, 3, 1, 4, 6,8]; /// not working
const cow = 2;
const result = maxDistanceCow(arr, cow);
console.log(result);