// Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

// cada chamada recursiva espera o resultado da proximá até que
// o caso base retorne um valor e o calculo seja  feito de baixo pra  cima
function fatoriall(numero) {
  if (numero < 0) {
    throw new Error("não existe fatorial de numeros negativos BB")
  } else if (numero === 0) {
    return 1
  }
  return numero * fatoriall(numero - 1)
  //a lógica é a seguinte para fatorial de 5
  // 5 * fatoriall(4) 5 * 24 = 120
  // 4 * fatoriall(3) 4 * 6 = 24 
  // 3 * fatoriall(2) 3 * 2 = 6
  // 2 * fatoriall(1) 2 * 1 = 2
  // 1 * fatoriall(0) 1 * 1 = 1
}
console.log(fatoriall(5))