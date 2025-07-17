const nome = 'Luiz Otavio Miranda';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
const imc = peso/(altura*altura);
let anoAtual = 2010;
const anoDeNascimento = anoAtual - idade;

const nomeSeparado = nome.split(' ');

// Selecionar a primeira e a última palavra
const nomeSimplificado = nomeSeparado[0] + ' ' + nomeSeparado[nomeSeparado.length - 1];


console.log(`${nome}`
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nomeSimplificado);

