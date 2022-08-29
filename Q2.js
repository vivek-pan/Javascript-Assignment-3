// 2. Write a program to find whether a given number is armstrong number or not
//    A positive integer of n digits is called an Armstrong number of order n iff
//    abcd… = pow(a,n) + pow(b,n) + pow(c,n) + pow(d,n) + …

//**Armstrong or not for 3 digit number**//

let n = 153;
let temp = n;
let result = 0;

while(temp>0){
    rem = temp%10;
    result += rem*rem*rem;
    //temp = temp/10;
    temp = Math.floor(temp/10);
}

if(result == n)
    console.log(n + " is an Armstrong number")
else
    console.log(n + " is not an Armstrong number");

