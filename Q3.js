// Write a program to find whether a given number is special number or

// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 14

function factorial(num){
    let fact = 1;

    for(i=1; i<=num; i++){
        fact = fact*i
    }
return fact;
}

function isSpecial(num){
    let temp = num;
    let result =0;

    while(temp>0){
        rem = temp%10;
        result += factorial(rem)
        temp = Math.floor(temp/10);
    }

    if(result == num)
        return true;
    else
        return false;
    
}

let num = 14;
result = isSpecial(num);

if(result)
    console.log(num + " is a Special number");
else
    console.log(num + " is not a Special number");