// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

let market = [
    { name: 'productA', price: 5},
    { name: 'productB', price: 12},
    { name: 'productC', price: 28},
];


for (let i = 0; i < market.length; i++) {
    const product = market[i];
    console.log(`Nome do produto: ${product.name}, Preço: ${product.price}`);
}