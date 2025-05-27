const entrada = require('prompt-sync')();
let aluguel = 0;
let dias = 0;
let KM = 0;
let valorPorKM = 0;

function typeCar() {
    let carro = entrada("informe qual tipo de carro você alugou? luxo ou popular?: ")

    switch (carro) {
        case "luxo":
            dias = entrada("quantos dias o veículo passou alugado por você?: ")
            KM = entrada("Qual foi a kilometragem rodada com o carro?: ")
            aluguel = dias * 150
            if (KM <= 200) {
                valorPorKM = KM * 0.30
            } else {
                valorPorKM = KM * 0.25
            }
            break;
        case "popular":
            dias = entrada("quantos dias o veículo passou alugado por você?: ")
            KM = entrada("Qual foi a distancia percorrida com o carro em Kilometros?: ")
            aluguel = dias * 90
            if (KM <= 100) {
                valorPorKM = KM * 0.20
            } else {
                valorPorKM = KM * 0.10
            }
            break;
        default:
            console.log("Operação inválida")
            return
    }
    let aPagar = valorPorKM + aluguel
    console.log(`\n o Valor a pagar pelo aluguel do veiculo é R$${aPagar.toFixed(2)}`)

}
typeCar();