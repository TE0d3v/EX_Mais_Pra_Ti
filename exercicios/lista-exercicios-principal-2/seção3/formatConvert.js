// Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

pares = [['a', 1], ['b', 2], ['c', 3]]
obj = { a: 1, b: 2, c: 3 }
function paresParaObjeto(pares) {
    
    //  O método .reduce() transforma o array em um único valor (nesse caso, um objeto)
    //   Parâmetros:
    //  - acumulador: o objeto que está sendo construído
    //  - atual: o par [chave, valor] atual do array
    //  - {}: valor inicial (objeto vazio)
    
    return pares.reduce((acumulador, atual) => {
        // Para cada par, adiciona a chave e valor ao objeto acumulador
        // atual[0] = chave (ex: 'a')
        // atual[1] = valor (ex: 1)
        acumulador[atual[0]] = atual[1]

        // Retorna o acumulador atualizado para a próxima iteração
        return acumulador
    }, {})
}
console.log(paresParaObjeto(pares))
function objetoParaPares(obj) {
    // retorna autommaticamente um array de pares equivalente ao objeto
    return obj = Object.entries(obj)

}
console.log(objetoParaPares(obj))