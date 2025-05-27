// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Digite sua altura em metros: "));
let peso = parseFloat(prompt("Digite seu peso em quilos: "));

let IMC = peso / (altura * altura);             

if (IMC < 18.5) {
    console.log("Abaixo do peso");
} else if (IMC >= 18.5 && IMC < 25) {
    console.log("Peso normal");
} else if (IMC >= 25 && IMC < 30) {
    console.log("Sobrepeso");
} else if (IMC >= 30) {
    console.log("Obesidade");
}