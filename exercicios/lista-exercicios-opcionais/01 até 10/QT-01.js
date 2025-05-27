const entrada = require ('prompt-sync')();

let diaCigarro = (Number(entrada("Digite a quantidade de cigarros fumados por dia: ")))
let anosFumados = (Number(entrada("Por quantos anos você fuma?: ")))
let totalFumado = diaCigarro * (anosFumados * 365)
console.log(`você fumou durante todos o seu tempo de fumante o total de ${totalFumado} cigarros`)

let tempoPerdido = totalFumado * 10
let diasPerdidos = Math.round(tempoPerdido / 1440)
console.log(`você perdeu uma média de ${diasPerdidos.toFixed(2)} dias de vida por fumar todos esse tempo`)