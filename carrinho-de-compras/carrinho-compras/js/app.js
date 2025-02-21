document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o carrinho limpando os valores
    limpar();
  
    // Configura os event listeners para os botões
    const adicionarBtn = document.getElementById('adicionar-btn');
    const limparBtn = document.getElementById('limpar-btn');
  
    adicionarBtn.addEventListener('click', adicionar);
    limparBtn.addEventListener('click', limpar);
  });
  
  let totalGeral = 0;
  
  function adicionar() {
    // Recupera os valores do produto e da quantidade
    const produtoSelect = document.getElementById('produto');
    const produtoValue = produtoSelect.value;
    const [nomeProduto, precoStr] = produtoValue.split(' - R$');
    const valorUnitario = parseFloat(precoStr);
    
    const quantidadeInput = document.getElementById('quantidade');
    const quantidade = parseInt(quantidadeInput.value, 10);
  
    if (!quantidade || quantidade <= 0) {
      alert('Selecione uma quantidade válida do produto');
      return;
    }
    
    // Calcula o subtotal do produto
    const preco = quantidade * valorUnitario;
    
    // Adiciona o produto ao carrinho
    const carrinho = document.getElementById('lista-produtos');
    const produtoHTML = `
      <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
      </section>
    `;
    carrinho.insertAdjacentHTML('beforeend', produtoHTML);
    
    // Atualiza o total do carrinho
    totalGeral += preco;
    document.getElementById('valor-total').textContent = `R$ ${totalGeral}`;
    
    // Reseta o campo de quantidade
    quantidadeInput.value = '';
  }
  
  function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ ${totalGeral}`;
  }
  