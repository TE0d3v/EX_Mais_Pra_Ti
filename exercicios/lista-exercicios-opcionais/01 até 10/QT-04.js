const entrada = require('prompt-sync')();

let reta1 = (parseFloat(entrada("Digite o primeiro segmento de reta: ")))
let reta2 = (parseFloat(entrada("Digite o segundo segmento de reta: ")))
let reta3 = (parseFloat(entrada("Digite o terceiro segmento de reta: ")))

if(isNaN(reta1) || isNaN(reta2) || isNaN(reta3) || reta1 <= 0 || reta2 <= 0 || reta3 <= 0){
    console.log("Digite numeros válidos (Números positivos)")
}

if(reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta1 + reta2){
    console.log("É possivel ser formado um triangulo com os 3 segmentos de reta informados")
}else{
    console.log("Impossivel ser formado um triangulo com os dados informados")
}