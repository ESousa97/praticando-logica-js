function comprar() {
    // Obtém o elemento do select e o valor selecionado
    const selectIngresso = document.getElementById('tipo-ingresso');
    const tipoIngresso = selectIngresso.value;
  
    // Obtém o valor digitado para a quantidade e o converte para número
    const inputQtd = document.getElementById('qtd');
    const qtdCompra = parseInt(inputQtd.value);
  
    // Verifica se foi informado um número válido
    if (isNaN(qtdCompra) || qtdCompra <= 0) {
      alert("Por favor, informe uma quantidade válida!");
      return;
    }
  
    // Mapeia o tipo de ingresso para o id do elemento que mostra a quantidade disponível
    let elementoQtd;
    if (tipoIngresso === 'pista') {
      elementoQtd = document.getElementById('qtd-pista');
    } else if (tipoIngresso === 'superior') {
      elementoQtd = document.getElementById('qtd-superior');
    } else if (tipoIngresso === 'inferior') {
      elementoQtd = document.getElementById('qtd-inferior');
    }
  
    // Recupera a quantidade disponível atual e converte para número
    let qtdDisponivel = parseInt(elementoQtd.innerText);
  
    // Verifica se a quantidade solicitada é maior que a disponível
    if (qtdCompra > qtdDisponivel) {
      alert(`Quantidade indisponível para ${tipoIngresso}!`);
      return;
    }
  
    // Atualiza a quantidade disponível
    qtdDisponivel -= qtdCompra;
    elementoQtd.innerText = qtdDisponivel;
    
    // (Opcional) Limpa o campo de quantidade após a compra
    inputQtd.value = '';
  }
  