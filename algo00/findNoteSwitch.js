// how much note does we have of 100, 50, 20, 1 rupee


const findNote = (r) => {
    switch (1) {
        case 1: {
            let Rs100 = Math.floor(r / 100);
            r = r % 100                       // updating the the amount 
            console.log(" Rs100 note:" + Rs100);
            // will not break here, need to deal with multiple statements
        }
        case 2: {
            let Rs50 = Math.floor( r / 50);
            r = r % 50
            console.log(" Rs50 note:" + Rs50);
        }
        case 3: {
            let Rs20 = Math.floor (r / 20);
            r = r % 20
            console.log(" Rs20 note:" + Rs20);
        }
        default: {
            let Rs1 =Math.floor(r / 1) ;
            r = r % 1
            console.log(" Rs1 note:" + Rs1);
        }
    }
}
const rupay = 1523648;
findNote(rupay);