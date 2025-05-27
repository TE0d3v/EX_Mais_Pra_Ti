// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const entrada = require('prompt-sync')();

let distancia = (Number(entrada("Digite a distância que deseja viajar em KM: "))) 
let valor = 0 


if (distancia < 200){
    let valor = 0.50
    let passagem = valor * distancia
    console.log(`Para a sua viagem de ${distancia} kilometros você terá que pagar o valor de R$${passagem.toFixed(2)} para prosseguir`)
}else{
    valor = 0.45
    let passagem = valor * distancia
        console.log(`Para a sua viagem de ${distancia} kilometros você terá que pagar o valor de R$${passagem.toFixed(2)} para prosseguir`)
}