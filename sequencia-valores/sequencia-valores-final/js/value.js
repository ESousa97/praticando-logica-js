// Função auxiliar para converter string de números (separados por vírgulas) em array de números
function parseList(str) {
  return str.split(',')
            .map(item => Number(item.trim()))
            .filter(item => !isNaN(item));
}

// Função para embaralhar os elementos (algoritmo de Fisher-Yates)
function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

// Função para remover duplicatas de um array
function removerDuplicatas(array) {
  return [...new Set(array)];
}

// Variável global para armazenar a lista concatenada (após remoção do último elemento)
let listaConcatenada = [];

// Evento para concatenar listas e remover o último elemento
document.getElementById('btnConcatenar').addEventListener('click', () => {
  const minhaListaStr = document.getElementById('minhaLista').value;
  const suaListaStr = document.getElementById('suaLista').value;
  
  const minhaLista = parseList(minhaListaStr);
  const suaLista = parseList(suaListaStr);
  
  // Concatena as duas listas
  let novaLista = minhaLista.concat(suaLista);
  // Remove o último elemento
  novaLista.pop();
  
  listaConcatenada = novaLista; // Armazena para uso futuro
  
  document.getElementById('resultadoConcatenacao').textContent =
    "novaLista (após concatenação e remoção do último elemento): " + JSON.stringify(novaLista);
  
  console.log("novaLista (após concatenação):", minhaLista.concat(suaLista));
  console.log("novaLista (após remover o último elemento):", novaLista);
});

// Evento para embaralhar a lista concatenada
document.getElementById('btnEmbaralhar').addEventListener('click', () => {
  if (listaConcatenada.length === 0) {
    alert("Por favor, realize a concatenação antes de embaralhar!");
    return;
  }
  // Cria uma cópia para não alterar o array original
  const listaEmbaralhada = embaralhar([...listaConcatenada]);
  document.getElementById('resultadoEmbaralhar').textContent =
    "novaLista embaralhada: " + JSON.stringify(listaEmbaralhada);
  console.log("novaLista embaralhada:", listaEmbaralhada);
});

// Evento para remover duplicatas de uma lista
document.getElementById('btnRemoverDuplicatas').addEventListener('click', () => {
  const listaDuplicadaStr = document.getElementById('listaDuplicada').value;
  const listaDuplicada = parseList(listaDuplicadaStr);
  const listaSemDuplicatas = removerDuplicatas(listaDuplicada);
  document.getElementById('resultadoDuplicatas').textContent =
    "Lista sem duplicatas: " + JSON.stringify(listaSemDuplicatas);
  console.log("listaDuplicada sem duplicatas:", listaSemDuplicatas);
});
