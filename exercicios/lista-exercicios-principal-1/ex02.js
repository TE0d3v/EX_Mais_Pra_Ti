// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

let idade = 30;
if (idade < 12){
    console.log("crianca")
} else if (idade < 18){
    console.log("adolescente")
} else if (idade < 60){
    console.log("adulto")
} else {
    console.log("idoso")
}