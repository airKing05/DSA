// while loop ne break statement use nahi krni hai uske andar switch cases fase huye hai to bahr  kese aaye
// to exit(); ka use krenege


let exit = function(n){
    switch (n) {
        case 0:
            break;
    }
}

let switchStatementInWhile = function(){
    let ch = '1';
    let num = 1;
    while(true){
        switch(ch){
            case 1 : {
                console.log('not a character');
            }
            case '1' : {
                console.log('a character');
                break;   
            }
            default : {
                console.log('main default case');
            }
        }
        exit(1);
    }
    };
    switchStatementInWhile();