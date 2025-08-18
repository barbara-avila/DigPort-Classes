const prompt = require('prompt-sync')();
let vermelhas = 0
let verdes = 0

for (let i = 1; i <= 10; i++){
    let corDaFruta = prompt(`Qual a cor da fruta?`);

    if (corDaFruta.toLowerCase() == "vermelha") {
        vermelhas++
    } else if (corDaFruta.toLowerCase() == "verde") {
        verdes++
    }
}

console.log(`Quantidade de frutas vermelhas: ${vermelhas}`);
console.log(`Quantidade de frutas verdes: ${verdes}`);