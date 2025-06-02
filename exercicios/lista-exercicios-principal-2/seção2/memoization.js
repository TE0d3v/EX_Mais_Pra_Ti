// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
    // Cria um cache (armazenamento) para guardar os resultados
    const cache = new Map();
    
    return function(...args) {
        // Cria uma chave única para os argumentos
        // JSON.stringify converte os args em uma string para usar como chave
        const key = JSON.stringify(args);
        
        // Verifica se o resultado já está no cache
        if (cache.has(key)) {
            // console.log('Retornando do cache:', key);
            return cache.get(key);
        }
        
        // Se não estiver no cache, calcula e armazena
        // console.log('Calculando novo valor para:', key);
        const result = fn.apply(this, args);
        cache.set(key, result);
        
        return result;
    };
}

function fibbo(n){
    if (n < 2) return n;
    return fibbo( n - 1 ) + fibbo ( n - 2 );
}

const Ffibbo = memoize(function fibbo(n){
    if (n < 2) return n;
    return Ffibbo(n - 1) + Ffibbo( n - 2 );
})

console.log(Ffibbo(10));
console.log(fibbo(10));