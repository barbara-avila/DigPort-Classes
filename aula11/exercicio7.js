const prompt = require('prompt-sync')();
let saldoInicial = 1000.00

console.log('Escolha uma das opções abaixo:\n1. Verificar saldo\n2. Depositar\n3. Sacar\n4. Sair')

if (parseInt(let numero = prompt('Digite o número da opção desejada: ') == 1){
    console.log(O saldo atual é ${saldoInicial})
} else if (parseInt(let opcao = prompt('Digite o número da opção desejada: ') == 2){
    let deposito = parseInt(prompt('Digite o valor a ser depositado: '));
    saldoInicial += deposito
} else if (parseInt(let opcao = prompt('Digite o número da opção desejada: ') == 3){
    let saque = parseInt(prompt('Digite o valor a ser depositado: '));
    saldoInicial -= saque
} else (parseInt(let opcao = prompt('Digite o número da opção desejada: ') == 4){
    console.log('Encerrando atendimento.')
}