fn main() {
    println!("Hello worlld");

    // let  sol = 3; // can change a mutated variable
    // // println!("{}",sol)

    // // sol = "3" - types cannot be changed

    // let izz_gonee: bool = true;

    // let amount: f32 = 30.5;

    // let namet: char = 'a';

    // let student_age: [u8; 10] = [20, 25, 19, 23, 20, 24,45,43,21, 21]

    // let studentage_months: [f32; 5] = [10.03, 25.07, 30.05, 25.06, 01.01]
    
    // let mut students_age: [u8; 5] = [10, 12, 9, 11, 10];

    // students_age[1] = 5;
    // println!("{}", students_age[1]);

    // let counter: Vec<i8> = vec![4, -5, 7];
    // let mut new_counter: Vec<u8> = Vec::new();
    // new_counter.push(6);
    // println!("{:?}", new_counter)

        for num in 1..=100 { // Iterate over numbers 1 through 100 (inclusive)
        if num % 15 == 0 {  // Check for divisibility by 15 (3 and 5) first
            println!("FizzBuzz");
        } else if num % 3 == 0 {  // Check for divisibility by 3
            println!("Fizz");
        } else if num % 5 == 0 {  // Check for divisibility by 5
            println!("Buzz");
        } else {
            println!("{}", num); // Print the number itself if no other condition matches
        }
    }
    
}

// fn subtract(num1: i8, num2: i8) -> i32 {
//    ( 2-1 )
// }


