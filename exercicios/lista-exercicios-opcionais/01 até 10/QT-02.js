const entrada = require ('prompt-sync')();

let velocidade = (Number(entrada("Qual a velocidade do carro em KM/H?: ")))

if(velocidade < 80){
    console.log("Velocidade permitida tudo sob controle")
}else{
    let velocidadeAcima = velocidade - 80
    let valorMulta = velocidadeAcima * 5
    console.log(`Velocidade a cima do limite a sua multa é de R$${valorMulta.toFixed(2)}`) 
}