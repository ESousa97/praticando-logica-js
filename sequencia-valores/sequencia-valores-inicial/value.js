// 2 - Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.

var minhaLista = [1, 2, 3];
var suaLista = [4, 5, 6];
var novaLista = minhaLista.concat(suaLista);
console.log(novaLista);

// 3 - Remova o último elemento de novaLista. Imprima novaLista após a remoção.

var minhaLista = [1, 2, 3];
var suaLista = [4, 5, 6];
var novaLista = minhaLista.concat(suaLista);
novaLista.pop();
console.log(novaLista); // Saída: [1, 2, 3, 4, 5]

// 4 - Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

var minhaLista = [1, 2, 3];
var suaLista = [4, 5, 6];
var novaLista = minhaLista.concat(suaLista);
novaLista.pop();

function embaralhar(novaLista) {
  for (let i = novaLista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [novaLista[i], novaLista[j]] = [novaLista[j], novaLista[i]];
  }
  return novaLista;
}

console.log(embaralhar(novaLista));

// 5 - Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.

function removerDuplicatas(array) {
    return [...new Set(array)];
}

var minhaLista = [1, 2, 3];
var suaLista = [4, 5, 6];
var listaDuplicada = [1, 2, 3, 4, 5, 6, 1, 2, 3];
var novaLista = minhaLista.concat(suaLista);
novaLista.pop();

function embaralhar(novaLista) {
    for (let i = novaLista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novaLista[i], novaLista[j]] = [novaLista[j], novaLista[i]];
    }
    return novaLista;
}

console.log(embaralhar(novaLista));
console.log(removerDuplicatas(listaDuplicada));

// Código final:

// 1. Cria as listas e as concatena
var minhaLista = [1, 2, 3];
var suaLista = [4, 5, 6];
var novaLista = minhaLista.concat(suaLista);
console.log("novaLista (após concatenação):", novaLista);

// 2. Remove o último elemento de novaLista
novaLista.pop();
console.log("novaLista (após remover o último elemento):", novaLista);

// 3. Função para embaralhar os elementos (algoritmo de Fisher-Yates)
function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

// Embaralha novaLista (utilizando spread para não alterar a lista original, se necessário)
let listaEmbaralhada = embaralhar([...novaLista]);
console.log("novaLista embaralhada:", listaEmbaralhada);

// 4. Função para remover duplicatas de um array
function removerDuplicatas(array) {
  return [...new Set(array)];
}

// Teste da função removerDuplicatas com uma lista que possui duplicatas
var listaDuplicada = [1, 2, 3, 4, 5, 6, 1, 2, 3];
console.log("listaDuplicada sem duplicatas:", removerDuplicatas(listaDuplicada));

// Nessa aula aprendemos:

// Declarar uma variável do tipo array para representar uma lista;

// Adicionar um elemento a um array com a função push;

// Utilizar um código já desenvolvido por terceiros, para realizar o embaralhamento de elementos em um array.