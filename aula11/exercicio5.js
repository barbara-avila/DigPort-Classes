const prompt = require('prompt-sync')();
let soma = 0
let numero = 0

while (numero >= 0) {
    numero = parseInt(prompt(`Digite um número positivo (ou um negativo para parar):`));
    if (numero >= 0) {
        soma += numero;
    } 
}

console.log(`A soma dos números é: ${soma}`);