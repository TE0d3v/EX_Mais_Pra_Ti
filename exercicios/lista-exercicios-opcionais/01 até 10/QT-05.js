const entrada = require('prompt-sync')();

// function escolhaMaquina() {
//     const opcoes = ["pedra", "papel", "tesoura"];
//     const indice = Math.floor(Math.random() * opcoes.length);
//     return opcoes[indice];
// }
// const maquina = escolhaMaquina();

// console.log("escolha: \n 1 para pedra \n 2 para papel \n 3 para tesoura: ")
// let escolha = (Number(entrada("Qual o numero de escolha?: ")))

// switch (escolha) {
//     case 1:
//         escolhatexto = "pedra";
//         if (escolhatexto == maquina) {
//             console.log("empate")
//         } else if (maquina == "papel" && escolhatexto == "pedra") {
//             console.log("Você perdeu")
//         } else {
//             console.log("Ganhou")
//         }
//         console.log(`A sua escolha foi ${escolhatexto} e a escolha da maquina foi ${maquina}`)
//         break;
//     case 2:
//         escolhatexto = "papel";
//         if (escolhatexto == maquina) {
//             console.log("empate")
//         } else if (maquina == "tesoura" && escolhatexto == "papel") {
//             console.log("Você perdeu")
//         } else {
//             console.log("Ganhou")
//         }
//         console.log(`A sua escolha foi ${escolhatexto} e a escolha da maquina foi ${maquina}`)
//         break;
//     case 3:
//         escolhatexto = "tesoura";
//         if (escolhatexto == maquina) {
//             console.log("empate")
//         } else if (maquina == "pedra" && escolhatexto == "tesoura") {
//             console.log("Você perdeu")
//         } else {
//             console.log("Ganhou")
//         }
//         console.log(`A sua escolha foi ${escolhatexto} e a escolha da maquina foi ${maquina}`)
//         break;
//     default:
//         console.log("Operação inválida")
//         break;
// }

const PPT = () => {
    let opcoes = ["pedra", "papel", "tesoura"]

    console.log("Escolha: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura");

    let pessoa = Number(entrada("Qual a sua escolha?: ")) - 1;
    const computador = Math.floor(Math.random() * 3);

    if (pessoa >= 0 && pessoa <= 2) {
        console.log(`3... 2... 1... \n A sua escolha  foi ${opcoes[pessoa]} e a máquina escolheu ${opcoes[computador]}`);
        if (pessoa == computador) {
            console.log("Empate!");
            return;
        }
        if (
            (pessoa == 0 && computador == 2) ||
            (pessoa == 1 && computador == 0) ||
            (pessoa == 2 && computador == 1)
        ) {
            console.log(`Você vendeu pois ${opcoes[pessoa]} vence de ${opcoes[computador]}`);
            return;
        } else {
            console.log("Você perdeu acho melhor desistir");
        }
    }else{
        console.log("inválido")
    }
};
PPT();