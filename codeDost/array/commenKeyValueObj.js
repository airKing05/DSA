// find the commen key value pairs in objects
//obj1={a:1, b:2, c:3, d:4, e:5}
//obj2 = {a:2, c:3, e:5};


function commenKeyValueObj(obj1, obj2) {
    let obj = {};
    for (let key in obj1) {
        if (obj1[key] == obj2[key]) {
            console.log(obj1[key], obj2[key])
            obj[key] = obj1[key];
        }
    };
return obj;
}
    obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    obj2 = { a: 2, c: 3, f: 4, e: 5, };

    const result = commenKeyValueObj(obj1, obj2);
    console.log(result)
