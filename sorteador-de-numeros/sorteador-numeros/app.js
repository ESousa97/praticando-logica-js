// Aguarda o carregamento do DOM para adicionar os event listeners
document.addEventListener("DOMContentLoaded", () => {
    const btnSortear = document.getElementById("btn-sortear");
    const btnReiniciar = document.getElementById("btn-reiniciar");
  
    btnSortear.addEventListener("click", sortear);
    btnReiniciar.addEventListener("click", reiniciar);
  });
  
  function sortear() {
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const de = parseInt(document.getElementById("de").value);
    const ate = parseInt(document.getElementById("ate").value);
    
    // Valida se o "até" é maior que "de"
    if (de >= ate) {
      alert('O valor do "Até" deve ser maior que o valor do "De".');
      return;
    }
    
    // Verifica se há números suficientes no intervalo para sortear
    if (quantidade > (ate - de + 1)) {
      alert('A quantidade de números a serem sorteados deve ser menor ou igual à quantidade disponível no intervalo.');
      return;
    }
    
    const sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleatorio(de, ate);
      // Garante que o número não foi sorteado anteriormente
      while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
      }
      sorteados.push(numero);
    }
    
    // Exibe o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;
    
    // Habilita o botão de reiniciar
    alterarStatusBotao(true);
  }
  
  function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function alterarStatusBotao(habilitar) {
    const botao = document.getElementById("btn-reiniciar");
    if (habilitar) {
      botao.disabled = false;
      botao.classList.remove("container__botao-desabilitado");
      botao.classList.add("container__botao");
    } else {
      botao.disabled = true;
      botao.classList.remove("container__botao");
      botao.classList.add("container__botao-desabilitado");
    }
  }
  
  function reiniciar() {
    // Limpa os campos de entrada
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    // Restaura a mensagem de resultado padrão
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    // Desabilita o botão de reiniciar
    alterarStatusBotao(false);
  }
  