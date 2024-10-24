for (let num = 1; num <= 100; num++) {
    if (num % 15 === 0) {         // Check for divisibility by 15 first
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {    // Check for divisibility by 3
        console.log("Fizz");
    } else if (num % 5 === 0) {    // Check for divisibility by 5
        console.log("Buzz");
    } else {
        console.log(num);         // Print the number itself
    }
}
