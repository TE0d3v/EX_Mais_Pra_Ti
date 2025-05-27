// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

let numero = 5;
//  parseInt(prompt("Digite um número: "));


if (numero < 0){
    console.log = ("Fatorial nao existe para um numero negativo");
} else {
  let fat = 1;  
  for (let i = 1; i <= numero; i++){
    fat *= i;   
  }
  console.log (`O fatorial de ${numero} é ${fat}`);
}