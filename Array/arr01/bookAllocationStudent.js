// the target to achive that the each student have minimum number of pages
// each book should be alloted to each student;

const isPossible = (arr, m, mid) => {
    let l = arr.length;
    let studentCount = 1;        // there should be minimum one student exist;
    let pageCount = 0;
    for (let i = 0; i < l; i++) {
        if (pageCount + arr[i] <= mid) {
            pageCount += arr[i];     // total number of pages alloted to the first student
        } else {
            studentCount++;          // moving to second student
            if (studentCount > m || arr[i] > mid) {
                return false
            } else {     // pageCount will start again from 0 for the second student
                pageCount = arr[i]   // may be pageCount += arr[i]
            }
        }
    }
    return true
}


const  bookAllocation = (arr, m) => {
    let start = 0;
    let l = arr.length;
    let sum = 0;         // the ans could be lie between start page to total number of pages
    for (let i = 0; i < l; i++) {
        sum += arr[i]
    }
    let end = sum;     // our search space is 0------------100;
    let mid = start + (end - start) / 2
    let ans = -1

    while (start <= end) {
        if (isPossible(arr, m, mid)) {
            end = mid - 1;    // moving to left part because 10+ 20+ 30+ 40 =100>mid 
                              // so all the solution are lies hear, so need to come closer to solution which is left side
            ans = mid;        // mid could be our possible solution, ans could be lie left side of it
        } else {
            start = mid + 1   // if here mid<10, solution is not possible on that side got to right part
        }
        mid = start + (end - start) / 2
    }
    return ans; 
}

const arr = [10, 20, 30, 40];    // number of pages
const student = 2;
const result = bookAllocation(arr, student);
console.log(result);