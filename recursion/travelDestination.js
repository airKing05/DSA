// l#2

function travelDestination(src, dest){
   
    // base case
if(src=dest){
    console.log("ruk jao")
    return;
}
// processing 
src++
// recursive relation
travelDestination(src, dest)
console.log(`src=${src} and dest=${dest}`)
};
const destination = 10;
const source = 1;
const result = travelDestination(source, destination);
// console.log(result);