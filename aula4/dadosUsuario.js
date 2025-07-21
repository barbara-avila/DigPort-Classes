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


console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura}m de altura e seu IMC é de ${imc}`);    //('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nomeSimplificado);

