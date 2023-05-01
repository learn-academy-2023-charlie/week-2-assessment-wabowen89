// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
// input: object
// output: string
// function name: divThree
    // use "object" as parameter for the function
    // return a string listing the number provided and string stating whether or not it is evenly divisible by three (possible tool: conditionals)
// expected output: "15 is divisible by three", "0 is divisible by three", "-7 is not divisible by three"

// a) Create a test with expect statements for each of the variables provided.

describe("divThree", () => {
    it("Determines if the number is evenly distributed by three and returns a string", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(divThree(object1)).toEqual("15 is divisible by three")
        expect(divThree(object2)).toEqual("0 is divisible by three")
        expect(divThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// good failure due to divthree() not defined
// FAIL  ./challenges.test.js
// divThree
//   ✕ Determines if the number is evenly distributed by three and returns a string (1 ms)

// ● divThree › Determines if the number is evenly distributed by three and returns a string

//   ReferenceError: divThree is not defined

// b) Create the function that makes the test pass.

// const divThree = (object) => {
//     if (object.number % 3 === 0) {
//         return `${object.number} is divisible by three`
//     }
//     else {
//         return `${object.number} is not divisible by three`
//     }
// }

// Success
// PASS  ./challenges.test.js
// divThree
//   ✓ Determines if the number is evenly distributed by three and returns a string (1 ms)

// Refactor
// Pseudo code:
// input: object
// output: string
// function name: divThree
    // use "object" as parameter for the function
    // return a string listing the number provided and string stating whether or not it is evenly divisible by three (possible tool: ternary operator)
// expected output: "15 is divisible by three", "0 is divisible by three", "-7 is not divisible by three"

const divThree = (object) => {
    return object.number % 3 === 0 ? `${object.number} is divisible by three` : `${object.number} is not divisible by three`
}



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:
// input: array of strings
// output: array of inputs strings that are capitalized
// function name: strCap
// has parameter called "array"
// iterate through the array (possible tool: .map())
// change all characters in the string to capital characters (possible tool: .toUpperCase() and .substring() method)
// return string array with all characters capitalized
// expected output:
    // ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    // ["Temperature", "Database", "Chopsticks", "Mango"]

// a) Create a test with expect statements for each of the variables provided.

describe("strCap", () => {
    it("changes each string to capitalized letters", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(strCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(strCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// good failure due to strCap() not defined
// FAIL  ./challenges.test.js
// divThree
//   ✓ Determines if the number is evenly distributed by three and returns a string (1 ms)
// strCap
//   ✕ changes each string to all capitalized letters

// ● strCap › changes each string to all capitalized letters

//   ReferenceError: strCap is not defined

// b) Create the function that makes the test pass.

const strCap = (array) => {
    return array.map(value => value[0].toUpperCase() + value.substring(1))
}

// Success
// PASS  ./challenges.test.js
// divThree
//   ✓ Determines if the number is evenly distributed by three and returns a string (1 ms)
// strCap
//   ✓ changes each string to capitalized letters

// Refactor
    // no refactoring needed




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:
// input: string
// output: number
// function name: vowIndex
    // iterate through the string
    // compare each character to a set of vowels (possible tool: conditionals)
    // return the numberical index value of the first vowel encountered
// expected output: 1, 0, 2

// a) Create a test with expect statements for each of the variables provided.

describe("vowIndex", () => {
    it("returns the index of the first vowel encountered", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(vowIndex(vowelTester1)).toEqual(1)
        expect(vowIndex(vowelTester2)).toEqual(0)
        expect(vowIndex(vowelTester3)).toEqual(2)
    })
})

// good failure because vowIndex() is not defined
// FAIL  ./code-challenges.test.js
// divThree
//   ✓ Determines if the number is evenly distributed by three and returns a string (1 ms)
// strCap
//   ✓ changes each string to capitalized letters (1 ms)
// vowIndex
//   ✕ returns the index of the first vowel encountered

// ● vowIndex › returns the index of the first vowel encountered

//   ReferenceError: vowIndex is not defined


// b) Create the function that makes the test pass.

// const vowIndex = (string) => {

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === 'a') {
//             return i
//         }
//         else if (string[i] === 'e') {
//             return i
//         }
//         else if (string[i] === 'i') {
//             return i
//         }
//         else if (string[i] === 'o') {
//             return i
//         }
//         else if (string[i] === 'u') {
//             return i
//         }
//     }
// }

// Success
// PASS  ./code-challenges.test.js
// divThree
//   ✓ Determines if the number is evenly distributed by three and returns a string (1 ms)
// strCap
//   ✓ changes each string to capitalized letters
// vowIndex
//   ✓ returns the index of the first vowel encountered

// Refactor
// Pseudo code:
// input: string
// output: number
// function name: vowIndex
    // create a new string with each of the vowels
    // iterate through the original string using a for loop
    // iterate through the vowel string using a nested for loop
    // compare each vowel to each character in the original string (possible tool: conditionals)
    // return the numberical index value of the first vowel encountered
// expected output: 1, 0, 2

const vowIndex = (string) => {
    let vowels = "aeiou"
    for (let i = 0; i < string.length; i++) {
        for (let k = 0; k < vowels.length; k++){
            if (vowels[k] === string[i]) {
                return i
            }
        }
    }
}

// Success
// PASS  ./code-challenges.test.js
// divThree
//   ✓ Determines if the number is evenly distributed by three and returns a string (2 ms)
// strCap
//   ✓ changes each string to capitalized letters
// vowIndex
//   ✓ returns the index of the first vowel encountered`