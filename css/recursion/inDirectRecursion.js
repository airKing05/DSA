// l#11
// direct recursion is function call it self
// in-direct recursion in two function calling each others

//Q we have money, want to buy an Apple how much Apple can we get form that amount of money
let money = 100;
let totalApple = 0;

function buyApple(money) {
    // if I have money I can bought Apple 
    if (money > 0) {
        console.log("I have Rs:", money, "number of Apple:", totalApple)
        buyMore(money)
    } else {
        console.log("do not have money", totalApple)
    }
};
function buyMore(money) {
    // buying the Apple so total number of apple would be increse
    totalApple++;
    // whenever we bought Apple money will decrise from the apple amount
    buyApple(money - 10)
}

buyApple(money)