// 1 - Criar uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista e removê-lo. Atualizar a visualização da lista após a remoção.

// Array que armazenará os nomes dos amigos cadastrados
let amigos = [];

// Função para adicionar um novo amigo
function adicionar() {
  const input = document.getElementById("nome-amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarListaAmigos();
}

// Função que atualiza a exibição da lista de amigos na tela
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("lista-amigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo, index) => {
    // O atributo "onclick" chama a função removerAmigo passando o índice do amigo
    listaAmigos.innerHTML += `<span onclick="removerAmigo(${index})" style="cursor:pointer;">${index + 1} - ${amigo}</span><br/>`;
  });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
  amigos.splice(index, 1);
  atualizarListaAmigos();
}

// Função para realizar o sorteio dos amigos para o "amigo secreto"
function sortear() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para realizar o sorteio!");
    return;
  }

  const amigosEmbaralhados = [...amigos];
  
  for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
  }

  let resultado = "";
  for (let i = 0; i < amigosEmbaralhados.length; i++) {
    const amigo = amigosEmbaralhados[i];
    const amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
    resultado += `<span>${amigo} → ${amigoSecreto}</span><br/>`;
  }

  document.getElementById("lista-sorteio").innerHTML = resultado;
}

// Função para reiniciar a aplicação, limpando o array de amigos e a exibição na tela
function reiniciar() {
  amigos = [];
  document.getElementById("nome-amigo").value = "";
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
