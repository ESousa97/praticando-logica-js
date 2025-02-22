// Array de exemplo
const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Esta função simplesmente retorna uma cópia do array
function retornarElemento(array) {
  return array.map(item => item);
}

// Esta função verifica se um elemento está presente no array
function verificaElemento(array, elemento) {
  return array.includes(elemento);
}

// Atualiza a exibição do array na interface
function updateArrayList() {
  const listEl = document.getElementById('arrayList');
  listEl.innerHTML = ''; // Limpa a lista

  retornarElemento(elementos).forEach((item, index) => {
    const li = document.createElement('li');
    li.innerText = item;
    
    // Botão para remover o item
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remover';
    removeBtn.addEventListener('click', () => {
      elementos.splice(index, 1);
      updateArrayList();
    });
    
    li.appendChild(removeBtn);
    listEl.appendChild(li);
  });
}

// Inicializa a listagem do array ao carregar a página
updateArrayList();

// Evento para verificar se um elemento está presente
document.getElementById('verifyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const inputValue = document.getElementById('verifyInput').value.trim();
  const resultEl = document.getElementById('verifyResult');

  if (inputValue === "") {
    resultEl.innerText = "Por favor, insira um número para verificar.";
    return;
  }
  
  // Converte o valor para número
  const numero = parseFloat(inputValue);
  if (isNaN(numero)) {
    resultEl.innerText = `"${inputValue}" não é um número válido.`;
    return;
  }
  
  const encontrado = verificaElemento(elementos, numero);
  resultEl.innerText = encontrado
    ? `O número ${numero} está presente no array!`
    : `O número ${numero} não foi encontrado no array.`;
});

// Evento para adicionar um novo elemento ao array
document.getElementById('addForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const addInput = document.getElementById('addInput');
  const novoElemento = addInput.value.trim();
  const addResultEl = document.getElementById('addResult');
  
  if (novoElemento === "") {
    addResultEl.innerText = "Por favor, insira um número para adicionar.";
    return;
  }
  
  // Converte o novo valor para número
  const numero = parseFloat(novoElemento);
  if (isNaN(numero)) {
    addResultEl.innerText = `"${novoElemento}" não é um número válido.`;
    return;
  }
  
  elementos.push(numero);
  updateArrayList();
  
  addResultEl.innerText = `O número ${numero} foi adicionado ao array.`;
  addInput.value = ""; // Limpa o campo
});
