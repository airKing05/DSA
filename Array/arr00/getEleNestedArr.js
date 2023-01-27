

const user = [
    {
        name: "anilraj",
        books: ["book1", "book2", "book3"]
    },
    {
        name: "ajay",
        books: ["book4", "book4"]
    },
    {
        name: "rakesh",
        books: ["book5", "book6"]
    }
];

function book(obj) {
  
}

function getEleFromNestedArr(obj){
    const books = obj.map((item) => item.books).flat(1);

    let books1 = obj.reduce((acc, curr) => {
        let books = curr.books;
        let len = books.length;
        for (let i = 0; i < len; i++) {
            acc.push(books[i]);
        }
        //console.log(acc)
        return acc;
        //return acc.concat(books)
        //console.log("acc",acc.concat(...acc, ...books)
    }, []);
    return books1;
}

const result = getEleFromNestedArr(user);
console.log(result);

//console.log([].concat([1,2,3, ...[4,5]]))
