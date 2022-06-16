


let switchStatement = function(){
let ch = '2';
let num = 1;
switch(ch){
    case 1 : {
        console.log('not a character');
             break;   // break nahi lagayenge to aage wale case ko bhi execute kar deta  hai
    }
    case '1' : {
        switch(num){
            case 1: {
                console.log('nested: it is a number')
                break;
            } 
            case '1': {
                console.log('nested: not a character');
                 break;
            }
            default : {
                console.log('nested: default case');
            }
        }
        break;   
    }
    case '2': {
        console.log('a character');
            // continue;  /// does not work here
    }
    case 2 : {
        console.log('not a character');
             break;  
    }
    default : {
        console.log('main default case');
    }
}
};
switchStatement();


