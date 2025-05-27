// Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [
    {nome: "iphone", preço: 1000},
    {nome: "notebook", preço: 200},
    {nome: "tablet", preço: 2000},
    {nome: "celular", preço: 500},
    {nome: "mouse", preço: 50},
    {nome: "teclado", preço: 100},
    {nome: "monitor", preço: 1050},
];

function ordemNomePreço(arr){
// .Sort ordena o array pelo preço 
// .map retorna um novo array com os nomes ordenados de menor para maior 
    const ordem = arr.sort((a, b) => a.preço - b.preço).map(x => x.nome)
    return ordem;
}
console.table(ordemNomePreço(produtos));