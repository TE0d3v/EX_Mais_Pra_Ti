// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

// let macas = parseInt(prompt("Digite o número de maçãs compradas: "));
//utilizando operador ternário
let macas = 42;

let preco = macas < 12 ? 0.30 : 0.25;
console.log(`O valor total da compra foi de R$ ${(preco * macas).toFixed(2)}`);
