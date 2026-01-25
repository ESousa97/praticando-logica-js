// Usa as funções compartilhadas do ../../shared.js

(function() {
  let amigos = [];

  document.addEventListener('DOMContentLoaded', function() {
    const adicionarBtn = document.getElementById('adicionar-btn');
    const sortearBtn = document.getElementById('sortear-btn');
    const reiniciarBtn = document.getElementById('reiniciar-btn');
    const listaAmigosContainer = document.getElementById('lista-amigos');

    adicionarBtn.addEventListener('click', adicionar);
    sortearBtn.addEventListener('click', sortear);
    reiniciarBtn.addEventListener('click', reiniciar);

    listaAmigosContainer.addEventListener('click', function(event) {
      if (event.target && event.target.tagName === 'SPAN') {
        const index = parseInt(event.target.dataset.index);
        if (!isNaN(index)) {
          removerAmigo(index);
        }
      }
    });
  });

  function adicionar() {
    const input = document.getElementById('nome-amigo');
    const nome = input.value.trim();

    if (nome === '') {
      alert('Por favor, insira um nome válido!');
      return;
    }

    const nomeLower = nome.toLowerCase();
    const nomeJaExiste = amigos.some(amigo => amigo.toLowerCase() === nomeLower);

    if (nomeJaExiste) {
      alert('Este nome já foi adicionado!');
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
      const span = document.createElement('span');
      span.textContent = \\ - \\;
      span.setAttribute('data-index', index);
      span.style.cursor = 'pointer';
      listaAmigos.appendChild(span);
      listaAmigos.appendChild(document.createElement('br'));
    });
  }

  function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
  }

  function sortear() {
    const amigosEmbaralhados = realizarSorteio(amigos);
    if (amigosEmbaralhados) {
      document.getElementById('lista-sorteio').innerHTML = gerarResultadoSorteio(amigosEmbaralhados);
    }
  }

  function reiniciar() {
    amigos.length = 0;
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
  }
})();
