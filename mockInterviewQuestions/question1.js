// Given a number as an input, print out every integer from 1 to that number.However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.



// number is positive. iterating from 1 -> number

// fizz if is divisible by 5
// buzz if is  divisible by 3

// if 15 -> fizz buzz
// if 10 -> fizz
// if 6 -> buzz

function FizzBuzz(integer) {
    //loop from 1-int
    for (let i = 1; i <= integer; i++) {
        //check if divisible by 3 and 5
        //check if divisible by 3
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBizz")
        }
        else if (i % 3 == 0) {
            console.log("Buzz")
        }
        //check if divisible by 5
        else if (i % 5 == 0) {
            console.log("Fizz")
        }

        else {
            console.log(i)
        }
        //check if divisible by 3 and 5
    }
}

FizzBuzz(30)
