// Crie um programa que exibe a tabuada de um número fornecido pelo usuário
// (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

let entrada = parseInt(prompt("Digite um numero entre 1 e 10 para receber sua tabuada: "));


//ituliza a variavel de funcionamento do loop para fazer os calculos e exibir os resultados
//barra n para poder fazer a separação das tabuadas de cada operação
console.log("\nAdição:")
for (let i = 1; i <= 10; i++) {
    let resultado1 = entrada + i;

    console.log(`${entrada} + ${i} = ${resultado1}`)
}

console.log("\nSubtração:")
for (let i = 1; i <= 10; i++) {
    let resultado2 = entrada - i;

    console.log(`${entrada} - ${i} = ${resultado2}`)
}

console.log("\nMultiplicação:")
for (let i = 1; i <= 10; i++) {
    let resultado3 = entrada * i;

    console.log(`${entrada} * ${i} = ${resultado3}`)
}

console.log("\nDivisão:")
for (let i = 1; i <= 10; i++) {
    let resultado4 = entrada / i;

    console.log(`${entrada} / ${i} = ${resultado4.toFixed(2)}`)
}