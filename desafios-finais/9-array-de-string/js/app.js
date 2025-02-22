// Array de strings de exemplo
let stringArray = ["apple", "banana", "cherry", "date"];

// Função que retorna o array como uma string separada por vírgulas
function arrayToString(array) {
  return array.join(", ");
}

// Função que verifica se todos os elementos do array são strings
function verificaArray(array) {
  return array.every(element => typeof element === "string");
}

// Função que verifica se uma determinada string está presente no array
function verificaStringNoArray(array, string) {
  return array.includes(string);
}

// Atualiza a exibição do array (texto e lista com remoção individual)
function updateArrayDisplay() {
  // Atualiza o texto com o array completo
  document.getElementById("arrayText").innerText = arrayToString(stringArray);
  
  // Atualiza a lista com remoção individual de itens
  const listEl = document.getElementById("arrayList");
  listEl.innerHTML = "";
  stringArray.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = item;
    
    // Botão para remover o item
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remover";
    removeBtn.addEventListener("click", () => {
      stringArray.splice(index, 1);
      updateArrayDisplay();
    });
    
    li.appendChild(removeBtn);
    listEl.appendChild(li);
  });
}

// Inicializa a exibição do array ao carregar a página
updateArrayDisplay();

// Evento para verificar se a string está presente no array
document.getElementById("verifyForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const inputValue = document.getElementById("verifyInput").value.trim();
  const resultEl = document.getElementById("verifyResult");
  
  if (inputValue === "") {
    resultEl.innerText = "Por favor, insira uma string para verificar.";
    return;
  }
  
  const encontrado = verificaStringNoArray(stringArray, inputValue);
  resultEl.innerText = encontrado 
    ? `"${inputValue}" está presente no array!`
    : `"${inputValue}" não foi encontrada no array.`;
});

// Evento para adicionar uma nova string ao array
document.getElementById("addForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const addInput = document.getElementById("addInput");
  const novaString = addInput.value.trim();
  const addResultEl = document.getElementById("addResult");
  
  if (novaString === "") {
    addResultEl.innerText = "Por favor, insira uma string para adicionar.";
    return;
  }
  
  // Opcional: evitar duplicatas
  if (verificaStringNoArray(stringArray, novaString)) {
    addResultEl.innerText = `"${novaString}" já está presente no array.`;
    return;
  }
  
  stringArray.push(novaString);
  updateArrayDisplay();
  addResultEl.innerText = `"${novaString}" foi adicionada ao array.`;
  addInput.value = "";
});
