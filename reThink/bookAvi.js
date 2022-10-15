

//
//m1
function Book(name, auther, numOfBook){
    this.name = name
    this.auther = auther
    this.numOfBook = numOfBook
};

Book.prototype.getAvilability = function(){
    if(this.numOfBook === 0){
        return "out of stock"
    }else if(this.numOfBook < 5){
        return "low stock"
    }else{
        return "In stock"
    }
}

// when book is sold the number of book will be descrese from stock
Book.prototype.sell = function(numOfCopiesSold){
   return this.numOfBook = this.numberOfBook - numOfCopiesSold;
}

// add book to stock
Book.prototype.reStock =  function(numOfCopiesRestock){
    return this.numOfBook = this.numberOfBook + numOfCopiesRestock;
}


const book1 = new Book("how to win friend and influance people", "anil", 2);

console.log("avialbilty:", book1.getAvilability())

//book1.sell(3);
book1.reStock(0);
console.log("avialbilty:", book1.getAvilability())



class BookC{
    constructor(name, auther, numOfBook){
         this.name = name
    this.auther = auther
    this.numOfBook = numOfBook
    }

    getAvilability(){
    if(this.numOfBook === 0){
        return "out of stock"
    }else if(this.numOfBook < 5){
        return "low stock"
    }else{
        return "In stock"
    } 
    }
   
    sell(numOfCopiesSold){
   return this.numOfBook = this.numberOfBook - numOfCopiesSold;
   }

    reStock(numOfCopiesRestock){
    return this.numOfBook = this.numberOfBook + numOfCopiesRestock;
    }

}


const book2 = new BookC("how to win friend and influance people", "anil", 2);

console.log("avialbilty:", book2.getAvilability())

//book2.sell(3);
book2.reStock(0);
console.log("avialbilty:", book2.getAvilability())



