// Car object and function
console.log("Object car");
let car = {
    color: "black",
    power: function(enginePower){
        console.log(enginePower);
    }
}
console.log(car.color);
car.color = "green";
console.log(car.color);
car.power(2);

//Function Pears and Apples
console.log("Pears and Apples");
function warehouse(pears, apples){
    return pears+apples;
}
console.log("Pears+Apples in thr warehouse = ",warehouse(5,7));


  //Check type of argument
console.log("Type of argument");
function calculateType(argument) {
    console.log("Type of argument is",typeof(argument));
}
calculateType("String");
calculateType(5);
calculateType(true);
calculateType(warehouse);
calculateType(car);

// Function that determines if the number is Prime
console.log("Function that determines if the number is Prime");
function isPrime(n){
    let label=true;
    for (let i=2;i<n;i++){
        if (n%i==0)
            label = false;
    if (label){
        return("Number is prime");
    } 
    else {
        return("Number is not prime");
    }
    }
}
console.log(isPrime(5));
console.log(isPrime(3));
console.log(isPrime(10));
console.log(isPrime(17));
console.log(isPrime(16));
// Say Hi to your Name if it s saved in the payment terminal

console.log("Payment Terminal");
let myName = 'Iryna';
function terminal(name) {
    if (name==myName) {
        console.log("Hi,", name);
    }else{
        console.log("No such name");
    }

}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('What is your name?', name => {
    terminal(name);
    readline.close();
  });