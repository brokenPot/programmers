let input = require("fs").readFileSync(0, "utf8").toString().split(" ");
const result = Number(input[0]) + Number(input[1]);
console.log(result);