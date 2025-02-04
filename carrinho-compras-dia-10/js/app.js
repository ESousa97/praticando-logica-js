let totalGeral;
limpar();

function adicionar () {
    //recuperar o valor do nome do produto, quantidade e preço
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    if (!quantidade == 0 || quantidade == '') {
        alert('Selecione a quantidade do produto');
        return;
    }
    // calcular o preço, nosso subtotal
    let preco = quantidade * valorUnitario;

    //adicionar o produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

    //atualizar o total do carrinho
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar () {
    //limpar a lista de produtos
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ ${totalGeral}`;
}
