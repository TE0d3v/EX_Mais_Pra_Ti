// Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
const entrada = require ('prompt-sync')();

let numeroAleatorio = Math.floor(Math.random()*100) + 1;
let tentativas = 0;
let acertou = false;

while(!acertou){
    let respostaUsuário = Number(entrada("Digite um número: "));
    tentativas++;

    if (respostaUsuário === numeroAleatorio){
        console.log(`\nPalpite correto em ${tentativas} tentativas`);
        acertou = true;
    }else if(respostaUsuário < numeroAleatorio){
        console.log("\nMais alto");
        console.log(`\nTentativas: ${tentativas}`);
    }else{
        console.log("\nMais baixo")
        console.log(`\nTentativas: ${tentativas}`);
    }
}