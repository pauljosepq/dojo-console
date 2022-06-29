const prompt = require("prompt-sync")()
const {Range} = require("range-dojo")

let arr = prompt("Insert the desired range with the following structure (/[x, y]/):  ")
const r = new Range(arr)

console.log("Options:")
console.log("1. Contains Integer\n2. Contains Range\n3. Get All Points\n4. Equals\n5. Get Endpoints ")
let opt = prompt("Which action would you like to do: ");

switch (opt) {
    case '1':
        let integer = prompt("Insert the intergers separated by commas: ")
        if(r.contains(integer)){
            console.log("The range does contains the interger/s")
        }else{
            console.log("The range does not contains the interger/s")
        }
        break;
    case '2':
        let range = prompt("Insert the range to evaluate with the following structure (/[x, y]/):  ")
        const r2 = new Range(range)
        if(r.containsRange(r2.start, r2.end)){
            console.log("The range does contains the given range")
        }else{
            console.log("The range does not contains given range")
        }
        break;
    case '3':
        console.log(r.getAllPoints())
        break;
    case '4':
        let equality = prompt("Insert the range to evaluate equality with the following structure (/[x, y]/):  ")
        const r3 = new Range(equality)
        if(r.equals(r3)){
            console.log("The range is equal to the given range")
        }else{
            console.log("The range is not equal to the given range")
        }
        break;
    case '5':
        console.log(r.getEndPoints())
        break;
    default:
        console.log("The specified option is not defined")
        break;
}