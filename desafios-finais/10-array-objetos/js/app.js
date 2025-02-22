// Array de objetos representando estudantes do curso
let estudantes = [
  { nome: "Estudante 1", idade: 20 },
  { nome: "Estudante 2", idade: 21 },
  { nome: "Estudante 3", idade: 22 },
  { nome: "Estudante 4", idade: 23 }
];

/**
 * Função deepEqual para comparar dois objetos recursivamente.
 * Retorna true se os objetos são idênticos em estrutura e valores.
 */
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || obj1 === null ||
      typeof obj2 !== 'object' || obj2 === null)
    return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

/**
 * Função que recebe um array de estudantes e um objeto estudanteProcurado.
 * Retorna true se o estudante estiver presente (comparação profunda).
 */
function verificaEstudante(estudantes, estudanteProcurado) {
  return estudantes.some(estudante => deepEqual(estudante, estudanteProcurado));
}

// Atualiza a exibição da lista de estudantes na interface
function updateStudentList() {
  const listEl = document.getElementById('studentList');
  listEl.innerHTML = ""; // Limpa a lista

  estudantes.forEach(estudante => {
    const li = document.createElement('li');
    li.innerText = `${estudante.nome} (${estudante.idade} anos)`;
    listEl.appendChild(li);
  });
}

// Inicializa a listagem dos estudantes ao carregar a página
updateStudentList();

// Evento para verificar se o estudante está presente
document.getElementById('verifyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nomeInput = document.getElementById('verifyNome').value.trim();
  const idadeInput = document.getElementById('verifyIdade').value.trim();
  const resultEl = document.getElementById('verifyResult');
  
  if (nomeInput === "" || idadeInput === "") {
    resultEl.innerText = "Por favor, preencha ambos os campos (nome e idade).";
    return;
  }
  
  const idade = parseInt(idadeInput, 10);
  if (isNaN(idade)) {
    resultEl.innerText = `"${idadeInput}" não é uma idade válida.`;
    return;
  }
  
  // Cria o objeto estudante procurado
  const estudanteProcurado = { nome: nomeInput, idade: idade };
  const encontrado = verificaEstudante(estudantes, estudanteProcurado);
  
  resultEl.innerText = encontrado 
    ? `O estudante ${nomeInput} (${idade} anos) está presente.`
    : `O estudante ${nomeInput} (${idade} anos) não foi encontrado.`;
});

// Evento para adicionar um novo estudante
document.getElementById('addForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nomeInput = document.getElementById('addNome').value.trim();
  const idadeInput = document.getElementById('addIdade').value.trim();
  const addResultEl = document.getElementById('addResult');
  
  if (nomeInput === "" || idadeInput === "") {
    addResultEl.innerText = "Por favor, preencha ambos os campos (nome e idade) para adicionar.";
    return;
  }
  
  const idade = parseInt(idadeInput, 10);
  if (isNaN(idade)) {
    addResultEl.innerText = `"${idadeInput}" não é uma idade válida.`;
    return;
  }
  
  const novoEstudante = { nome: nomeInput, idade: idade };
  
  // Verifica se o estudante já existe (usando comparação profunda)
  if (verificaEstudante(estudantes, novoEstudante)) {
    addResultEl.innerText = `O estudante ${nomeInput} (${idade} anos) já está presente.`;
    return;
  }
  
  estudantes.push(novoEstudante);
  updateStudentList();
  
  addResultEl.innerText = `O estudante ${nomeInput} (${idade} anos) foi adicionado.`;
  document.getElementById('addNome').value = "";
  document.getElementById('addIdade').value = "";
});
