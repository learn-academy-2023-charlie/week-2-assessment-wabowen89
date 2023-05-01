// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
// console.log(cohort.split(""))

// a) Your answer: ['C', 'h', 'a', 'r', 'l', 'i', 'e', ' ', '2', '0', '2', '3']
    // 'cohort' is a string datatype. '.split() is a mutator that can operate on either a string or an array that will create a new array. If you run '.split()' on a string, it will separate each character within that string in to its own element within a new array.

// b) Verify and explain: ['C', 'h', 'a', 'r', 'l', 'i', 'e', ' ', '2', '0', '2', '3']
  // '.split()' is a built-in method in Javascript. It's function is to take in a string and return an array with the string separated. How this string is separated is determined by what is contained within the (). For instance, .split("") will break down a string in to individual characters and place them in an array. If you use .split(" "), you will split a string in to individual words that will be stored in an array. '.split()' does not modify the original string, it merely creates a new array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
    // 'greeter()' is a function that takes in a string as an argument ('name'). The function will then produce a string and, through the use of string interpolation, insert the provided string into the new output string. In order for a function to work, it must return something. This is accomplished with the code 'return'. As this function is missing the 'return' code, it will not return anything. As a result, it will log "undefined".

// b) Verify and explain: undefined
  // A function is a block of code that is designed to perform a particular task. This means that in order for a function to operate correctly, it must produce some sort of an output. Therefore, it is required that the function contain a return statement. This does two things. First: it lets the program know that a particular value will be output from this function and provides it with that output. Second: it tells the program that the function has completed its action and needs to stop executing. Without this crucial line, a function will cease to work properly. Therefore, you will receive an "undefined" message if it is left out.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: multipliedByTwo is not a function
    // 'multipliedByTwo is a function. In order to call a function, you need to use the function invocation syntax. This includes the use of () after the function name. If this is left out, the program will fail to read the call correctly. As a result, an error will be encountered. This will result in an error message stating that 'multipliedByTwo' is not a function.
// b) Verify and explain: [ 8, 10, 12, 14, 16 ]
  // 'multipliedByTwo' is, in fact, a variable. It is given the value of the .map function. Through the use of dot notation, .map is able to iterate through the given array, in this case [4, 5, 6, 7, 8], and multiply each value by two. This returns a new array with each value doubled. Therefore, 'multipliedByTwo' is not a function, but a variable. This allows you to log it as if it were a regular variable.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
  // 'onlyOdds' is a variable that is assigned the value of the results of .filter on a given array. '.filter' will return a new array based on the values of a given array that match it's condition. In this case, the condition is met if the number divided by two (through the use of the modulo operator) generates a remainder. By logging onlyOdds, the array is displayed with only the values that are odd.
// b) Verify and explain: [ 11, 13, 15 ]
  // '.filter' is a function that takes in an array and returns a new array that contains only the values that meet the conditions of the filter. In the case of the above code, the condition is any value that is not evenly disivible by 2. The modulo operator divides each value by two and if that number does not result in 0, it has satisfied the condition. This value is then placed in the new array. When onlyOdds is logged, the variable onlyOdds is displayed. onlyOdds is given the value of the new array that is returned from the .filter function.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
  // myCodingSkills is an object with many properties contained within. 'languages' is one of those propertiest and it stores an array. If you call the object and use dot notation, you can call a specific property contained within that object. By logging 'myCodingSkills.language' you are calling the 'language' property of myCodingSkills. In addition, by using bracket notation, you can a specific element within a given array. Therefore, by logging 'myCodingSkills.language[0]', you are calling the first element within the array contained in 'languages'. This will return the string "JavaScript"

// b) Verify and explain: "JavaScript"
  // Objects allow us to store multiple properties through key value pairing. This is accomplished through the use of key: value, syntax. Logging an object will return all the key: values that are stored within. If you wish to call a specific value, you must call the key individually. This is done through the use of dot notation. It allows the program to call specific values within an object. Objects can store multiple different datatypes and even behaviors. both 'languages' and frameworks' are arrays, while 'databases' and 'versionControl' are strings. Because 'languages' is an array, you are able to call a specific element within that array through bracket notation. Hence, if you log myCodingSkills.languages[0], you are given the first element in the 'languages' array. This would be "JavaScript"

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: { "George", "Charlie", "2023"}
  // The class Learn defines an object that has three properties. 'cohort' and 'year' are predefined, whereas 'student' is an argument that is passed to the class. learnStudent creates a new Learn object and passes the argument "George" as a string to the class. As a result, if the object learnStudent is logged, the properties will be printed out.

// b) Verify and explain: Learn { student: 'George', cohort: 'Charlie', year: 2023 }
  // When logging an object, the properties defined in the constructor will be printed out. These properties will be printed in the key value pairing as they have been coded in the constructor. As a result, the class name will be printed followed by curly braces. Inside the curly braces, each key value pair will be printed as key name: value. Therefore, when learnStudent is logged, we receive Learn { student: 'George', cohort: 'Charlie', year: 2023 }.

