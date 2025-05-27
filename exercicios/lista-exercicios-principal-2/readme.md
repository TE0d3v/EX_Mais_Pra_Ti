# 📚 Coleção de Algoritmos em JavaScript

Esta coleção contém diversos exemplos de algoritmos e técnicas de programação em JavaScript, cada um resolvendo um problema específico.

## 📂 Arquivos

### 1. [agrupamento_propriedade.js](./agrupamento_propriedade.js)
- **Função**: `vendasPorcliente(arr)`
- **Descrição**: Agrupa um array de vendas por cliente, somando os totais de cada um.
- **Técnicas**: `Array.reduce()`
- **Uso**: Processamento de dados de vendas.

### 2. [formatConvert.js](./formatConvert.js)
- **Funções**:
  - `paresParaObjeto(pares)`: Converte array de pares [chave, valor] para objeto.
  - `objetoParaPares(obj)`: Converte objeto para array de pares [chave, valor].
- **Técnicas**: `Array.reduce()`, `Object.entries()`
- **Uso**: Conversão entre estruturas de dados.

### 3. [map_And_ord.js](./map_And_ord.js)
- **Função**: `ordemNomePreço(arr)`
- **Descrição**: Retorna nomes de produtos ordenados por preço crescente.
- **Técnicas**: `Array.sort()`, `Array.map()`
- **Uso**: Ordenação e transformação de dados.

### 4. [debounce.js](./debounce.js)
- **Função**: `debounce(fn, delay)`
- **Descrição**: Implementa o padrão debounce para limitar chamadas frequentes.
- **Técnicas**: Closures, `setTimeout()`
- **Uso**: Otimização de eventos como redimensionamento de tela ou input.

### 5. [fatorialRecursivo.js](./fatorialRecursivo.js)
- **Função**: `fatoriall(numero)`
- **Descrição**: Calcula fatorial usando recursão.
- **Técnicas**: Recursão, tratamento de erros.
- **Uso**: Exemplo clássico de algoritmo recursivo.

### 6. [memoization.js](./memoization.js)
- **Função**: `memoize(fn)`
- **Descrição**: Implementa memoização para cache de resultados.
- **Técnicas**: Closures, `Map`, `JSON.stringify()`
- **Uso**: Otimização de funções custosas.

### 7. [adivinhacao.js](./adivinhacao.js)
- **Script**: Jogo de adivinhação
- **Descrição**: Gera número aleatório e interage com usuário até acerto.
- **Técnicas**: `Math.random()`, loops `while`, entrada/saída.
- **Uso**: Exemplo interativo básico.

### 8. [palavrasUnicas.js](./palavrasUnicas.js)
- **Função**: `palavrasUnicas(string)`
- **Descrição**: Extrai palavras únicas de uma string.
- **Técnicas**: `String.split()`, `Array.includes()`
- **Uso**: Processamento de texto.

### 9. [validação.js](./validação.js)
- **Função**: `ehDataValida(dia, mes, ano)`
- **Descrição**: Valida se uma data é real, considerando anos bissextos.
- **Técnicas**: Operadores lógicos, arrays.
- **Uso**: Validação de formulários.

## 🛠 Como Usar

1. Clone o repositório ou copie os arquivos individuais
2. Execute com Node.js:
   ```bash
   node nome_do_arquivo.js