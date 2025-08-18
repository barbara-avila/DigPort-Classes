// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.

let cat = {
    name: 'Newy',
    color: 'Laranja',
    age: 1,
    toy: 'Bolinha'
};

cat.age = 3

console.log(cat.name, cat.color, cat.age, cat.toy);
console.log(`O gato ${cat.name} tem ${cat.age} anos e sua cor é ${cat.color}, seu brinquedo preferido é ${cat.toy}`);
