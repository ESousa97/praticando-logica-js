// Array que armazenará os nomes dos amigos cadastrados
let amigos = [];

// Função para adicionar um novo amigo
function adicionar() {
  // Seleciona o elemento de input pelo id "nome-amigo"
  const input = document.getElementById("nome-amigo");
  // Captura o valor digitado pelo usuário e remove espaços desnecessários
  const nome = input.value.trim();

  // Verifica se o campo está vazio após remover os espaços
  if (nome === "") {
    // Exibe um alerta caso o nome não seja válido e interrompe a execução da função
    alert("Por favor, insira um nome válido!");
    return;
  }

  // Adiciona o nome ao array de amigos
  amigos.push(nome);
  // Limpa o campo de input para uma nova inserção
  input.value = "";
  // Atualiza a lista exibida na tela com os amigos cadastrados
  atualizarListaAmigos();
}

// Função que atualiza a exibição da lista de amigos na tela
function atualizarListaAmigos() {
  // Seleciona o elemento que exibe a lista de amigos pelo id "lista-amigos"
  const listaAmigos = document.getElementById("lista-amigos");
  // Limpa o conteúdo atual da lista para evitar duplicações
  listaAmigos.innerHTML = "";

  // Itera sobre cada amigo no array e adiciona seu nome à lista com o respectivo índice
  amigos.forEach((amigo, index) => {
    listaAmigos.innerHTML += `<span>${index + 1} - ${amigo}</span><br/>`;
  });
}

// Função para realizar o sorteio dos amigos para o "amigo secreto"
function sortear() {
  // Verifica se há pelo menos dois amigos cadastrados para realizar o sorteio
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para realizar o sorteio!");
    return;
  }

  // Cria uma cópia do array de amigos para embaralhar, preservando a ordem original
  const amigosEmbaralhados = [...amigos];
  
  // Embaralha o array usando o algoritmo Fisher-Yates
  for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
    // Gera um índice aleatório entre 0 e i
    const j = Math.floor(Math.random() * (i + 1));
    // Troca os elementos nas posições i e j
    [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
  }

  // Variável para armazenar o resultado do sorteio
  let resultado = "";
  // Gera o sorteio utilizando o método de deslocamento circular:
  // Cada amigo recebe como amigo secreto o próximo na lista,
  // e o último amigo recebe o primeiro.
  for (let i = 0; i < amigosEmbaralhados.length; i++) {
    const amigo = amigosEmbaralhados[i];
    // Utiliza o operador módulo para voltar ao início da lista quando necessário
    const amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
    // Adiciona o par (amigo → amigo secreto) ao resultado formatado em HTML
    resultado += `<span>${amigo} → ${amigoSecreto}</span><br/>`;
  }

  // Exibe o resultado do sorteio no elemento com id "lista-sorteio"
  document.getElementById("lista-sorteio").innerHTML = resultado;
}

// Função para reiniciar a aplicação, limpando o array de amigos e a exibição na tela
function reiniciar() {
  // Reseta o array de amigos para vazio
  amigos = [];
  // Limpa o campo de input
  document.getElementById("nome-amigo").value = "";
  // Limpa a lista de amigos exibida na tela
  document.getElementById("lista-amigos").innerHTML = "";
  // Limpa o resultado do sorteio exibido na tela
  document.getElementById("lista-sorteio").innerHTML = "";
}
