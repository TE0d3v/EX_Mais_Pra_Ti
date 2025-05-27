// Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const entrada = require('prompt-sync')();

let soma = 0
let menor = 0
let media = 0
let pares = 0

let valores = [];
let continuar = "sim";

do {
    let dados = Number(entrada("escreva um numero para adicionar?: "))
    valores.push(dados)

    continuar = entrada("digite 'sim' se deseja continuar e 'não' para parar: ")

} while (continuar === "sim")

soma = valores.reduce((acumulador, atual) => acumulador + atual, 0);

media = soma / valores.length;

pares = valores.filter(num => num % 2 == 0);

menor = valores.
console.log(soma)
console.log(media)
console.log(pares)
