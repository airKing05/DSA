// L#02 replace String Words

const string = "anil is good boy, anil is from rajasthan";

// first word replace
const result = string.replace("anil", "anilraj");

console.log("result", result);

const result2 = string.replaceAll("anil", "anilraj")
console.log("result2", result2);

const result3 = string.replace(/anil/g, "anilraj");
console.log("result3", result3);
