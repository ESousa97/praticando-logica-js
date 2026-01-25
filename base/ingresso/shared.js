// Funções compartilhadas para o sistema de ingressos

function comprar() {
    const selectIngresso = document.getElementById('tipo-ingresso');
    const tipoIngresso = selectIngresso.value;
  
    const inputQtd = document.getElementById('qtd');
    const qtdCompra = parseInt(inputQtd.value);
  
    if (isNaN(qtdCompra) || qtdCompra <= 0) {
        alert("Por favor, informe uma quantidade válida!");
        return;
    }
  
    let elementoQtd;
    if (tipoIngresso === 'pista') {
        elementoQtd = document.getElementById('qtd-pista');
    } else if (tipoIngresso === 'superior') {
        elementoQtd = document.getElementById('qtd-superior');
    } else if (tipoIngresso === 'inferior') {
        elementoQtd = document.getElementById('qtd-inferior');
    }
  
    let qtdDisponivel = parseInt(elementoQtd.innerText);
  
    if (qtdCompra > qtdDisponivel) {
        alert(`Quantidade indisponível para ${tipoIngresso}!`);
        return;
    }
  
    qtdDisponivel -= qtdCompra;
    elementoQtd.innerText = qtdDisponivel;
    inputQtd.value = '';
}
