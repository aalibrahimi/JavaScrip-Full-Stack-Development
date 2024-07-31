

//Practice console messages, normal text, warning, and error
console.log({name: "Alex"});
console.warn("this is waarning");
console.error("error");
console.table({name: "Jose", age:  20});

// log -> console.log shortcut
console.log("");

//uppercasing
let Name = 'ali';
let uppercaseName = Name.toUpperCase();
console.log(uppercaseName);

//--------------------------------------
//using multiple variables and formating a sentence with all 3 let keywords
let name = "Albert";
let career = "software engineer";
let gender = "male";
//instead of using format f you need to use " ` " backtick to format 
console.log(`my name is ${name} and the career i am currently pursuing is: ${career}, and I am a ${gender}`);

//math
let num = 2
console.log(num ** 2);

//counter
let counter = 0;
counter++;
console.log(counter);

//Equality Operators
// === checks for the variable type AND value is equal
// !== checks for the variable type AND value is not equal
// == only chekcs if the value is the same
// !=
console.log(10 === 10)
console.log(5 !== 5)
console.log(15 == '15')
console.log(2 == 3)

//----------------------------------------
// 1. Create variable name (firstFavNumb) & store your favorite number.
// 2. Create variable name (secondFavNumb) & store second fav Number.
// 3. Check (firstFavNumb is greater then secondFavNumb)
// 4. Check (firstFavNumb is less then secondFavNumb)
// 5. Check (firstFavNumb is greater then & equal to secondFavNumb)
// 6. Check (firstFavNumb is less then & equal to secondFavNumb)
// 7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
// 8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// 10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.