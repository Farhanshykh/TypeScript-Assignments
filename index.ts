//Functions Assignments

// 1. Basic function Creation

//Create a function named calculateProduct that takes two parameters, multiplies them together,
//and returns the result.

//const result = calculateProduct(5, 10);
//console.log(result); // Should print 50

function calculateProduct (a: number, b: number) {
    return a * b;
}
const result = calculateProduct(5, 10);
console.log(result);

// 2. Using Default Parameters 

//Define a function greet that takes two parameters: name and greeting, where greeting has a 
//default value of "Hello".The function should return a greeting massage.

//console.log(greet("ameen")); //should print "Hello, Ameen !".
//console.log(greet("zia", "Hi")); // Should Print "Hi, Zia!".

function greet (name: string, greeting: string = "hello") {
    return greeting + " " + name;
}
console.log(greet("Ameen !"));

function greet2 (name: string, greeting: string = "hy") {
    return greeting + " " + name;
}
console.log(greet2("Zia !"));

//3. Arrow Function Conversion

//Convert the following traditional function into an arrow function:
// function add(a: number, b: number): number {
// return a +b 
// }

let add = (a: number, b: number): number => {
    return a + b;
}
console.log(add(2, 3));

//4. Implementing a Rest Parameter

//Write a function sumAll that uses a rest parameter to take any number of 
//arguments and returns their sum.
//console.log(sumAll(1, 2, 3)); //should print 6
//console.log(sumAll(10, 20, 30, 40, 50)); //should print 150

function sumAll (...numbers: number[]) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40, 50));

//5. Function returning another function

//create a function multiplier that takes a number as its argument and returns
//another function. the returned function should take a single number as its
//argument and return the product of its argument and the argument of the first function.

//const triple = multiplier(3);

//console.log(triple(5)) // should print 15

function multiplier(factor: number) {
    return function(num: number) {
        return factor * num;
    };
}

const triple = multiplier(3);

console.log(triple(5)); 

//console.log(multiplier(3)(5)); //another way of invocation

//6. Recursive Function - Factorial

//Write a recursive function to calculate the factorial of a number. The factorial
//of a number n is the product of all positive integers less than or equal to n.
//For example: the factorial of 5 (5!) is 5 * 4* 3 * 2 * 1 = 120. 

//console.log(factorial(5)); //should print 120;

function factorial (n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n -1);
}
console.log(factorial(5));

//7. Nested Functions - Scoping

//Write a function that contains two nested functions. The outer function should accept
//a parameter x, and its nested function should increment and then triple x. The outer function
//should return the result of the tripled value after incrementing.

//console.log(outerFunction(4)); // Should first increment 4 to 5, then triple 5 to 15, and finally
//return 15.

function outerFunction (x: number) {
    function innerFunction () {
        return (x + 1) * 3;
    }
    return innerFunction();
}
console.log(outerFunction(4));

//8. Anonymous Function and callbacks

//Create an anonymous function that takes an array of numbers and a callback function.
//The anonymous function should apply the callback function to each element of the array
//and return a new array with the results.
//const numbers =[1, 2, 3];
//const doubledNumbers = anonymousFunction(number, (x) => x * 2);
//console.log(doubledNumbers); //Should print [2, 4, 6];

const numbers: number[] = [1, 2, 3];

const anonymousFunction = (arr: number[], callback: (x: number) => number): number[] => {
    const results: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        
        const transformedValue = callback(arr[i]);
        results[i] = transformedValue;
    }

    return results;
};

const doubledNumbers: number[] = anonymousFunction(numbers, (x: number) => x * 2);

console.log(doubledNumbers); 

// 9. Set Timeout Exercise:

//Use setTimeout within a function to simulate a delay in processing (e.g., retrieving data
//from a database). The function should accept a callback and invoke it after a delay of 2 seconds.

//simulateDelay(() => console.log("Data Retrieved"));

function simulateDelay(callback: () => void): void {
    setTimeout(callback, 2000);
}

simulateDelay(() => console.log("Data Retrieved"));