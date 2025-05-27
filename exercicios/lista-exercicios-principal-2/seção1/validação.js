// Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
    // verifica se o mes do ano está entre 1 e 12
    if (mes < 1 || mes > 12) return false;
    // verifica de o dia do mes está entre 1 e 31
    if (dia < 1 || dia > 31) return false;
    // verifica se o ano vái de 2000 à 2100
    if (ano < 2000 || ano > 2100) return false;

    // verifica se é multiplo de 4, depois garante que multiplos de 100 não entram e multiplos de 400 entram
    const anoBissexto = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));

    // cria um array com os dias de cada mes
    const diaMes = [31, (anoBissexto ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // faz a verificação de acordo com o o dia e o mes do array criado
    if (dia > diaMes[mes - 1] || dia < 1) return false;

    return true;
}

console.log(ehDataValida(26, 5, 2025));