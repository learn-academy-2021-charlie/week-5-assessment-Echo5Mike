// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.
// git a test outline and input the basic test conditon
    // test will take in a string
    // test will check to make sure that vowels are changed to intengers
// TEST must fail]
// create fn that will take generice string
    //AEIOU will be swapped
    //fn should return a string.

// describe("a function", () => {
//     it("function that takes in a string", () => {
//       expect(someTimesY("Lackadaisical")).toEqual("L4ck4d41s1c4l")
//       expect(someTimesY("Gobbledygook")).toEqual("G0bbl3dyg00k")
//       expect(someTimesY("Eccentric")).toEqual("3cc3ntr1c")
//     })
// })
// // make code generic
// const someTimesY = (string)=>{
//     outPut = []
//     // maybe put extra letters in outCast. .slice .splice. pop?
//     outCast= []
//     makeArray = (string).split("")
//     for (let i = 0; i < makeArray.length; i++) {
//         if(makeArray[i] == "a" || makeArray[i] == "A")
//             outPut.push("4")
//         else if (makeArray[i] == "e"|| makeArray[i] == "E")
//             outPut.push("3")
//         else if (makeArray[i] == "i"|| makeArray[i] == "I")
//             outPut.push("1")
//         else if (makeArray[i] == "o"|| makeArray[i] == "O")
//             outPut.push("0")
//             // how to return the remaining letters
//         else outPut.push(makeArray[i])
//     }
//     return outPut.join("")

// }
// var secretCodeWord1 = "Lackadaisical"
// console.log(someTimesY(secretCodeWord1))
// // Expected output: "L4ck4d41s1c4l"
// var secretCodeWord2 = "Gobbledygook"
// console.log(someTimesY(secretCodeWord2))
// // Expected output: "G0bbl3dyg00k"
// var secretCodeWord3 = "Eccentric"
// console.log(someTimesY(secretCodeWord3))
// // Expected output: "3cc3ntr1c"

// const someTimesY = (string)=>{
//     outPut = []
//     makeArray = (string).split("")
//     for (let i = 0; i < makeArray.length; i++) {
//         if(makeArray[i] == "a" || makeArray[i] == "A")
//             outPut.push("4")
//         else if (makeArray[i] == "e"|| makeArray[i] == "E")
//             outPut.push("3")
//         else if (makeArray[i] == "i"|| makeArray[i] == "I")
//             outPut.push("1")
//         else if (makeArray[i] == "o"|| makeArray[i] == "O")
//             outPut.push("0")
//         else (makeArray[i] !== "a" || makeArray[i] !== "A" || makeArray[i] !== "i"|| makeArray[i] !== "I" || makeArray[i] !== "o"|| makeArray[i] !== "O" || makeArray[i] !== "e"|| makeArray[i] !== "E")
//             outPut.push(makeArray[i])
//     }
//     return outPut

// }

// b) Create the function that makes the test pass.
//////////////////////
//////////////////////
//////////////////////
//////////////////////


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.
// a) Create a test with an expect statement using the variable provided.
// Create a shell test with 
    // test will take in fruitPicker array
    // test will .map or forloop for all words that contain a in the name.
//fn will take in array of words and return only workds that have a
// maybe a filter method?

// describe("only words with a's", () => {
//     it("returtakes in an array and returns all the words that contain the letter a", () => {
//       expect(fruitPicker(["Apple", "Banana", "Plum", "Orange", "Kiwi"])).toEqual(["Apple", "Banana", "Orange"])
//       expect(fruitPicker(["Mango", "Cherry", "Apricot", "Blueberry", "Peach"])).toEqual(["Mango", "Apricot", "Peach"])
//     })
// })
// const fruitPicker = (array) =>{
//     //.map wont work.  I tried for loop but I'm having a hard time seperating the a's
//     basket = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === "a")
//             basket.push(array[i])//I tried using .filiter so I can value and index but I am have a difficult time nailing the syntex.
        
//     }    
// // I feel that the filiter or forloop is the only way to go
// // what I am trying to do is get a method and have either a for loop or filiter go over each string and see if there is an "a" in it and move that word into the basket
//    return basket 
// }  
// var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// console.log(fruitPicker(arrayOfWords1))
// // Expected output: ["Apple", "Banana", "Orange"]
// var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// // Expected output: ["Mango", "Apricot", "Peach"]



// b) Create the function that makes the test pass.


//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////
//////////////////////

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.
// make a shell test and see it fail 
    //the function should be albe to take and array
        // we need to compare 
describe("a function that check for a full house", () => {
    it("function that takes in an array of 5 numbers", () => {
      expect(hand([5, 5, 5, 3, 3])).toEqual("true")
      expect(hand([5, 5, 3, 3, 4])).toEqual("false")
      expect(hand([5, 5, 5, 5, 4])).toEqual("false")
    })
})
var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass.
