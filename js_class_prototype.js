//Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal
let animal = {
    move : "fast",
    alive: true,
}
let cat = {
    color: "black",
    __proto__:animal,
}
console.log(cat.move);
