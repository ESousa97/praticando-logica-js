document.addEventListener('DOMContentLoaded', () => {
  const comprarBtn = document.getElementById('comprar-btn');
  comprarBtn.addEventListener('click', comprar);
});

function comprar() {
  // Recupera o tipo de ingresso selecionado e a quantidade desejada
  const tipoIngresso = document.getElementById('tipo-ingresso').value;
  const qtdCompra = parseInt(document.getElementById('qtd').value);

  // Validação da quantidade
  if (isNaN(qtdCompra) || qtdCompra <= 0) {
    alert("Por favor, informe uma quantidade válida!");
    return;
  }

  // Mapeamento do tipo de ingresso para o id do elemento que mostra a quantidade disponível
  const mapping = {
    'pista': 'qtd-pista',
    'superior': 'qtd-superior',
    'inferior': 'qtd-inferior'
  };

  const idElemento = mapping[tipoIngresso];
  if (!idElemento) {
    alert("Tipo de ingresso inválido!");
    return;
  }

  const elementoQtd = document.getElementById(idElemento);
  let qtdDisponivel = parseInt(elementoQtd.innerText);

  // Verifica se há ingressos suficientes disponíveis
  if (qtdCompra > qtdDisponivel) {
    alert(`Quantidade indisponível para ${tipoIngresso}!`);
    return;
  }

  // Atualiza a quantidade disponível e exibe feedback
  qtdDisponivel -= qtdCompra;
  elementoQtd.innerText = qtdDisponivel;
  exibirMensagem(`Compra de ${qtdCompra} ingresso(s) para ${tipoIngresso} realizada com sucesso!`);
  
  // Limpa o campo de quantidade
  document.getElementById('qtd').value = '';
}

function exibirMensagem(msg) {
  const divMensagem = document.getElementById('mensagem');
  divMensagem.textContent = msg;
  setTimeout(() => {
    divMensagem.textContent = '';
  }, 3000);
}
