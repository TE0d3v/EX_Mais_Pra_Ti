const entrada = require('prompt-sync')();

let horas = Number(entrada("Quantas horas de atividade física você fez neste mês? "));
let pontos = 0;
let dinheiro = 0;

if (horas <= 10) {
    pontos = horas * 2;
} else if (horas <= 20) {
    pontos = horas * 5;
} else {
    pontos = horas * 10;
}

dinheiro = pontos * 0.05;

console.log(`\nVocê acumulou ${pontos} pontos.`);
console.log(`Você ganhou R$ ${dinheiro.toFixed(2)}.`);
