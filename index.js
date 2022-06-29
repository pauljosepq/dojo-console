const prompt = require("prompt-sync")()
const {Range} = require("range-dojo")

let arr = prompt("Insert the desired range with the following structure (/[x, y]/):  ")
const r = new Range(arr)

console.log("Options:")
console.log("1. Contains Integer\n2. Contains Range\n3. Get All Points\n4. Equals\n5. Get Endpoints ")
let opt = prompt("Which action would you lik to do: ");

switch (opt) {
    case value:
        
        break;

    default:
        break;
}