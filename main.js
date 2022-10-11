const lib = require("./lib");

//console.log(process.argv)

if(process.argv.length <= 3){
    console.log("IP");
    process.exit(1);
}

let command = process.argv[2];
let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if(numbers.some(isNaN)){ // 하나라도 NaN이라면
    console.log("SN");
    process.exit(1);
}


//console.log(numbers)
//console.log(process.argv.slice(3, process.argv.length))


let result;
switch(command){
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        break;
    case "max":
        break;
    default:
        break;
        
}
console.log(result);

