const entrada = require('prompt-sync')()
function numAleatório(){
const computador = Math.floor(Math.random() * 5)
return computador;
}
const Num = numAleatório();

function Game(){
console.log("jogo de adivinhação \n")
let escolha = Number(entrada("Digite o numero e compare se foi igual ao da maquina: "))

if(escolha === Num){
    console.log("Parabéns Conseguiu acertar o mesmo numero")
    console.log(`${Num} == ${escolha}`)
}else{
    console.log("numeros diferentes vc não conseguiu")
    console.log(`${Num} != ${escolha}`)
}
return
}
Game()