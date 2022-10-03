//L#08
// check that given strings are anagram or not
// first string element shoudbe present it to the second string

function isMap(str) {
    let map = {};
    for (let char of str) {
        map[char] = map[char] ? map[char] + 1 : 1;
    }
    return map;
}
function anagramStr(str1, str2) {

    let isAngram = true;

    if (str1 === str2) {
        // if both are equel
        isAngram = true;
    } else {
        if (str1.length !== str2.length) {
            // if both's length are not equel
            isAngram = false;
        } else {

            const map1 = isMap(str1);
            const map2 = isMap(str2);

            for(let key in map1){
                if(map1[key] !==map2[key]){
                    isAngram = false
                }else{
                    isAngram = true;
                }
            }
            // for (let char of str1) {
            //     map[char] = map[char] ? map[char] + 1 : 1;

            // }
            // for (let char of str2) {
            //     if (!map[char]) {
            //         console.log(char, map[char])
            //         isAngram = false;
            //     } else {
            //         map[char]--;
            //     }
            // }
        }

    }


    return isAngram;
};

const result = anagramStr("anilli", "anilli");
console.log("result", result)