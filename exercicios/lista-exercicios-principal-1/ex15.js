// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let a = 0;
let b = 1;

console.log(a)
console.log(b)
for (let i = 1; i <= 8 ; i++){
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
}