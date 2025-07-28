(function() {
  // Array que armazenará os nomes dos amigos cadastrados
  let amigos = [];

  // Configura os event listeners após o carregamento do DOM
  document.addEventListener('DOMContentLoaded', function() {
    const adicionarBtn = document.getElementById('adicionar-btn');
    const sortearBtn = document.getElementById('sortear-btn');
    const reiniciarBtn = document.getElementById('reiniciar-btn');
    const listaAmigosContainer = document.getElementById('lista-amigos');

    adicionarBtn.addEventListener('click', adicionar);
    sortearBtn.addEventListener('click', sortear);
    reiniciarBtn.addEventListener('click', reiniciar);

    // Remoção dos amigos via event delegation
    listaAmigosContainer.addEventListener('click', function(event) {
      if (event.target && event.target.tagName === 'SPAN') {
        const index = parseInt(event.target.dataset.index);
        if (!isNaN(index)) {
          removerAmigo(index);
        }
      }
    });
  });

  // Adiciona um novo amigo à lista, verificando duplicidade (case insensitive)
  function adicionar() {
    const input = document.getElementById("nome-amigo");
    const nome = input.value.trim();

    if (nome === "") {
      alert("Por favor, insira um nome válido!");
      return;
    }

    // Verifica se o nome já foi adicionado (ignora maiúsculas/minúsculas)
    const nomeLower = nome.toLowerCase();
    const nomeJaExiste = amigos.some(amigo => amigo.toLowerCase() === nomeLower);

    if (nomeJaExiste) {
      alert("Este nome já foi adicionado!");
      return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarListaAmigos();
  }

  // Atualiza a exibição da lista de amigos, criando elementos com data-index
  function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
      const span = document.createElement("span");
      span.textContent = `${index + 1} - ${amigo}`;
      span.setAttribute('data-index', index);
      span.style.cursor = "pointer";
      listaAmigos.appendChild(span);
      listaAmigos.appendChild(document.createElement("br"));
    });
  }

  // Remove um amigo da lista e atualiza a exibição
  function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
  }

  // Realiza o sorteio dos amigos (amigo → amigo secreto) e exibe o resultado
  function sortear() {
    if (amigos.length < 2) {
      alert("Adicione pelo menos dois amigos para realizar o sorteio!");
      return;
    }

    const amigosEmbaralhados = [...amigos];
    // Embaralhamento utilizando o algoritmo Fisher-Yates
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

  // Reinicia a aplicação, limpando a lista de amigos e os resultados do sorteio
  function reiniciar() {
    amigos = [];
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
  }
})();
