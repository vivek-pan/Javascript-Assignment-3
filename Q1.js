// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

const prompt = require('prompt-sync')();

var n = prompt("Enter size of pattern ");
let string = "";
let count = 1;

for(i=1; i<=n; i++){
    for(j=1; j<=i; j++){
        string = string + count + " ";
        count++;
    }
    string += "\n";
}
console.log(string);