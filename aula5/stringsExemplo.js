let texto = "Javascript é incrível!"
texto.charAt(4)


console.log(texto[4]); //acesse e imprima a 5 letra
console.log(texto.charAt(4)); //acesse e imprima a 5 letra com charAt
console.log(texto.replace('incrível', 'poderoso')); //Substitua a palavra "incrível" por "poderoso"
console.log(texto.length); //imprima o número de casacteres da string
console.log(texto.slice(0, 10)); //use slice para extrair a plavra "Javascript"
console.log(texto.concat(' Vamos', ' Aprender!')); //use concat para adicionar " Vamos aprender!" ao final da string