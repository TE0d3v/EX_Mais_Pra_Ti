// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

if (num1 != num2 && num1 < num2) {
    console.log(`Os números em ordem crescente foram ${num1} e ${num2}`);
}else if(num1 != num2 && num1 > num2){
    console.log(`Os números em ordem crescente foram ${num2} e ${num1}`);
}

// poderia ser feito com array e sort

let numeros = [num1, num2];
numeros.sort((a, b) => a - b);

console.log(`Os números em ordem crescente são: ${numeros[0]} e ${numeros[1]}`);