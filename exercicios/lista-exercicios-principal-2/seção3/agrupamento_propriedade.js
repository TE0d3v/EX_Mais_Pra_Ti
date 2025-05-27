// Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

// Chave == cliente / Valor == total
vendas = [
    { cliente: 'Joaquim', total: 300 },
    { cliente: 'Joaquim', total: 400 },
    { cliente: 'Maria', total: 500 }
];
// .reduce() retorna um unico valor com base em uma funcao
function vendasPorcliente(arr) {

    return arr.reduce((acumulador, atual) => {
        if (acumulador[atual.cliente]) {
            acumulador[atual.cliente] += atual.total
        } else {
            acumulador[atual.cliente] = atual.total
        }
        return acumulador
    }, {})

}
console.log(vendasPorcliente(vendas))