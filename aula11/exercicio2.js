const prompt = require('prompt-sync')();

for (let dia = 1; dia <= 10; dia++){
    let quantidadeMacas = prompt(`Quantas Maçãs João colheu no dia ${dia}?`);
    console.log(`No dia ${dia}, João colheu ${quantidadeMacas} maçãs.`);
}