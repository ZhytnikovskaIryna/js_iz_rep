function test(a){
    if (a>2){
        result='Hi';
    }
    else{
        result='Bye';
    }
    return result;
}
let t = test();
console.log(typeof(t));
console.log(t);