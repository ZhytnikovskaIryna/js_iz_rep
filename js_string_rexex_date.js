//Task1- Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings 
//ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let str = "ahb acb aeb aeeb adcb axeb";
console.log(str.match(/a\wb/g));

//Task2 - Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
let str1 = "2 + 3 223 2223";
console.log(str1.match(/\d\s.\s\d/g));

//Get the day, month and year of the current date and output it to the console separately
let currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()+1);
console.log(currentDate.getDate());