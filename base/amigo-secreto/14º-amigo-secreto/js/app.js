// Usa as funções compartilhadas do ../../shared.js

let amigos = [];

function adicionar() {
  const input = document.getElementById('nome-amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome válido!');
    return;
  }

  amigos.push(nome);
  input.value = '';
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('lista-amigos');
  listaAmigos.innerHTML = '';

  amigos.forEach((amigo, index) => {
    listaAmigos.innerHTML += \<span onclick=\"removerAmigo(\)\" style=\"cursor:pointer;\">\ - \</span><br/>\;
  });
}

function removerAmigo(index) {
  removerAmigoDoArray(amigos, index, atualizarListaAmigos);
}

function sortear() {
  const amigosEmbaralhados = realizarSorteio(amigos);
  if (amigosEmbaralhados) {
    document.getElementById('lista-sorteio').innerHTML = gerarResultadoSorteio(amigosEmbaralhados);
  }
}

function reiniciar() {
  reiniciarAplicacao(amigos);
}
