const entrada = require('prompt-sync')();
let TotalHomen = 0;
let TotalMulher = 0;
let confirmação = "sim";

function validarDados() {
    do {
        let SALARIO = Number(entrada("Qual o salário do funcionário?: "))

        let SEXO = entrada("Qual o sexo que deseja adicionar o salário?: ")

        if (SEXO.toLowerCase().startsWith("f")) {
            TotalMulher += SALARIO
            confirmação = entrada("\ndeseja continuar adicionando?: ")
        } else if (SEXO.toLowerCase().startsWith("m")) {
            TotalHomen += SALARIO
            confirmação = entrada("\ndeseja continuar adicionando?: ")
        }

    } while (confirmação.toLowerCase() == "sim")

    console.log(`\no salário total dos homens é R$${TotalHomen.toFixed(2)} e o das mulheres é R$${TotalMulher.toFixed(2)}`);

}
validarDados();