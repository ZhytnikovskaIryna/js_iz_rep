//Task 1 - Iterate over movie names and put them in console
let movies = ["Super Man", "Avangers", "Star Wars"];
movies.forEach(movie => {
    console.log(movie);
});

//Task 2 - Convert array to string and back to array
let carDevs =['Mersedes', 'Volvo','Ford']
let strCarDevs = carDevs.join(',');
console.log(strCarDevs);
let arrCarDevs = strCarDevs.split(',');
console.log(arrCarDevs);

//Task3 - Add 'Hello' to each element of the array
let names = ['Olga', 'Alex', 'Evhen', 'Olena'];
let result = names.map(name=> name = 'Hello, '+name);
console.log(result);

//Task4 - convert numeric array to boolean
let numbers = [1,3,0,6,-5];
let booleanResult = numbers.map(function(number){
    if (number) return true
    else return false
})
console.log(booleanResult);

//Sort the array [1,6,7,8,3,4,5,6] in descending order
let array1 =[1,6,7,8,3,4,5,6];
console.log(array1.sort((a,b)=>a-b));

//Filter array [1,6,7,8,3,4,5,6] by value> 3
let array2 = [1,6,7,8,3,4,5,6];
console.log(array2.filter(value=>value>3));

//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
function findIndexofItem(array, number){
    let result = array.indexOf(number);
    return result; 
}
console.log(findIndexofItem([1,5,10,78],10));
console.log(findIndexofItem([1,5,10,78],5));
//Implement a loop that will print the number 'a' until it is less than 10

for (let a = 0; a <= 10; a++) {
    console.log(a);   
}
//Implement a loop that prints prime numbers to the console
console.log("prime numbers");
let n =10;
nextCycle:
for (let i=2; i<n;i++){  
    for (let j=2;j<i;j++){
        if (i%j==0) continue nextCycle;
    }
    console.log(i);
}
//Implement a loop that prints odd numbers to the console
console.log("Odd numbers"); 
for(let i=1;i<n;i++){
    if (i%2!==0) console.log(i);
}