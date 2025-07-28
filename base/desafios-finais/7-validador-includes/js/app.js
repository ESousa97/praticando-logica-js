// Array de exemplo
let arrayPalavras = ['desenvolvimento', 'frontend'];

// Função que transforma todos os itens do array em letras maiúsculas
function transformaParaMaiusculas(array) {
  return array.map(item => item.toUpperCase());
}

// Função que verifica se um elemento está presente no array (ignorando caixa alta/baixa)
function verificaElemento(array, elemento) {
  const arrayMaiusculas = transformaParaMaiusculas(array);
  return arrayMaiusculas.includes(elemento.toUpperCase());
}

// Atualiza a listagem do array exibido na tela
function updateArrayList() {
  const listEl = document.getElementById('arrayList');
  listEl.innerHTML = ''; // Limpa a lista

  arrayPalavras.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerText = item;
    
    // Botão para remover o item
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remover';
    removeBtn.addEventListener('click', () => {
      arrayPalavras.splice(index, 1);
      updateArrayList();
    });
    
    li.appendChild(removeBtn);
    listEl.appendChild(li);
  });
}

// Inicializa a listagem ao carregar a página
updateArrayList();

// Evento para verificar um elemento
document.getElementById('verifyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const inputValue = document.getElementById('verifyInput').value;
  const resultEl = document.getElementById('verifyResult');
  
  if(inputValue.trim() === "") {
    resultEl.innerText = "Por favor, insira um elemento para verificar.";
    return;
  }
  
  const encontrado = verificaElemento(arrayPalavras, inputValue);
  
  resultEl.innerText = encontrado
      ? `"${inputValue}" está presente no array!`
      : `"${inputValue}" não está presente no array!`;
});

// Evento para adicionar um novo elemento ao array
document.getElementById('addForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const addInput = document.getElementById('addInput');
  const novoElemento = addInput.value;
  const addResultEl = document.getElementById('addResult');
  
  if(novoElemento.trim() === "") {
    addResultEl.innerText = "Por favor, insira um elemento para adicionar.";
    return;
  }
  
  // Adiciona o novo elemento ao array
  arrayPalavras.push(novoElemento);
  updateArrayList();
  
  addResultEl.innerText = `"${novoElemento}" foi adicionado ao array.`;
  addInput.value = ""; // Limpa o campo
});
