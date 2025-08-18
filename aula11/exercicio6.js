const prompt = require('prompt-sync')();
let correctPassword = '1234';

while ((password = prompt('Qual a senha? ')) !== correctPassword){
    console.log('Senha Incorreta, tente novamente!');
} 

console.log('Senha correta! Acesso concedido');
