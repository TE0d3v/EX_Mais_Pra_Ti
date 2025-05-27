// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

let operação = Number(prompt("Escolha uma opção: 1 - Soma 2 - Subtração 3 - Multiplicação 4 - Divisão: "));

switch (operação) {
    case 1:
        console.log(num1 + num2);
        break;
    case 2:
        console.log(num1 - num2);
        break;
    case 3:
        console.log(num1 * num2);
        break;
    case 4:
        console.log(num1 / num2);
        break;
    default:
        console.log("Opção inválida");
}