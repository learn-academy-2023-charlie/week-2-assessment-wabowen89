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

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
    // 'greeter()' is a function that takes in a string as an argument ('name'). The function will then produce a string and, through the use of string interpolation, and the input string provided to its output. In order for a function to work, it must return something. This is accomplished with the code 'return'. As this function is missing the 'return' code, it will not return anything. As a result, it will log "undefined".

// b) Verify and explain: undefined

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
    // 
// b) Verify and explain:

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:
// b) Verify and explain:

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:
// b) Verify and explain:

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// b) Verify and explain: