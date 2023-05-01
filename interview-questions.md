# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A paramenter is used to notify a program that an input is needed in order for the following code to function. What a parameter needs is an argument. An argument is what is passed to a parameter in order to the following code to execute.

Researched answer: Parameters are named variables that are passed into a function. They are necessary for the importation of arguments into their function. They do not hold any specific value of their own. Arguments are the real values that are passed into a function. They hold a specific value and are passed into the functions parameters. They allow the function to execute any given action.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The predefined parameters of the built-in function .map are value, index, and array. The value is was is contained within each element of the provided array. The index is the element location within the given array. The array is the name of the given array. The only required parameter is the value parameter. The rest are optional

Researched answer: There are four pre-defined parameters of the built-in function .map. They are as follows: value, index, array, thisValue. Value gives the value of the current element being looked at. Index is the location of the current value within the array. Array provides the name of the array that the current element is located. thisValue is a value that has been passed into the function to be used as the 'this' value.

3. What is the difference between map and filter?

Your answer: While both .map and .filter provide a new array, they do so in different ways. '.map' iterates through an entire array and acts upon each given element. '.filter' iterates through an entire function, but only acts on elements that meet the conditions provided in the function definition. As such, .map will always produce an array that is the same size as the given array, whereas .filter can produce a smaller array that the given array depending on the conditions.

Researched answer: '.map' will return a new array containing the elements of it's given array. Each of those elements has had some sort of function applied to it that changes them. '.filter' will return a new array containing only items that meet the given criteria in the function definition. While this new array can be smaller, the elements will not have been changed from the original array.

4. What is iteration?

Your answer: Iteration is the process of progressing through a given code set and then repeating that code set a certain amount of times, or until a particular condition is met. This can be accomplished in many different ways, but is primarily done through the use of a for loop, or the use of a while loop. for loops will iterate through a code set a particular amount of times, whereas a while loop will iterate through a code set until a particular condition is met.

Researched answer: Iteration is the repition of a sequence of coding instructions until a specific end result is acheived. It can be also be referred to as loops. They allow programs to perform task repeatedly. This is particular useful if you need to progress through an array or need an action to be carried out until a given value meets a particular condition.

5. What is the difference between a function and a method?

Your answer: A function will perform a particular action on a given argument and return a new value without affecting the original argument. A method will fundamentally change the variable it is provided without creating a new element.

Researched answer: A function is a block of code that is designed to perform an action or set of actions. A method is an object property that contains a function value. A function can pass data and may return data, where as a method operates only the data contained within a class. 

6. STRETCH: What is hoisting in JavaScript?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: Components are bits of code that are independent and can be resused. Very similar to functions, but operate alone and return HTML. There are two types, class components and function components.

2. Spread operator: The spread operator is an ellipsis. It allows you to expand arrays and objects into multiple elements. The syntaxs is the ellipsis followed by the object, or array, name. ie: [...array1, ...object1].

3. React state: React state is a built-in object in React that contains data or information about a given component. It stores the property values that belong to that component.

4. React props: React props are arguments that are passed into React components. This is accomplished through HTML attributes. They are similar to function arguments in Javascript as well as attributes in HTML. They utilize the same syntax as attributes in HTML.

5. DOM events: DOM stands for Document Object Model. DOM Events are bits of code that are execute once an action triggers them. One such example would be clicking on a word causing it to change to a different word. They allow JavaScript to react to HTML events. Adding JavaScript to an HTML event attribute allows the JavaScript code to be run when the event is triggered.
