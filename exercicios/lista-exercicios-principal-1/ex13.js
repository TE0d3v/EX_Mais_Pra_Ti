// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let num;
let soma = 0;
let cont = 0;


// estudar mais sobre o do while pois tive dificuldade em entender
do {
    num = parseFloat(prompt("Digite um número: "));
    if (num !== 0) {
        soma += num;
        cont++;
    }
} while (num !== 0);

let media = soma / cont;
console.log(`A média aritmética dos números digitados é: ${media}`);