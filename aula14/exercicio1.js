//Crie uma função que receba dois números e uma operação matemática (+, -, *, /) 
// e retorne o resultado da operação entre os dois números. 

function operacao(valor1, valor2, operacao){
    if (operacao === '+') {
        return valor1 + valor2;
    } else if (operacao === '-') {
        return valor1 - valor2;
    } else if (operacao === '*') {
        return valor1 * valor2;
    } else if (operacao === '/') {
        return valor1 / valor2;
    }
}

console.log(operacao(8, 4, '+'));
console.log(operacao(8, 4, '-'));
console.log(operacao(8, 4, '*'));
console.log(operacao(8, 4, '/'));
