// Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(string) {
    let palavras = string.split(' ');
    let palavrasUnicas = [];

    for (let i = 0; i < palavras.length; i++) {
        if (!palavrasUnicas.includes(palavras[i])) {
            palavrasUnicas.push(palavras[i]);
        }
        
    }
    return palavrasUnicas

}
console.log(palavrasUnicas("olá olá mundo"));


























// const palavras = string.split(' ');
// const palavrasUnicas = [];

// for (let i = 0; i < palavras.length; i++) {
//     if (!palavrasUnicas.includes(palavras[i])) {
//         palavrasUnicas.push(palavras[i]);
//     }
// }

// return palavrasUnicas;