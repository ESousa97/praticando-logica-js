function verificarIdade() {
  // Seleciona o input e o local onde exibiremos a resposta
  const idadeInput = document.getElementById('idadeInput');
  const resultado = document.getElementById('resultado');

  // Lê o valor digitado e converte para número
  const idade = parseInt(idadeInput.value);

  // Verifica se o valor não é um número
  if (isNaN(idade)) {
    resultado.textContent = 'Por favor, digite uma idade válida.';
    return;
  }

  // Verifica se é maior ou menor de idade
  if (idade >= 18) {
    resultado.textContent = 'Você é maior de idade.';
  } else {
    resultado.textContent = 'Você é menor de idade.';
  }
}

// Adiciona um listener ao botão para chamar a função ao clicar
document.getElementById('verificarBtn').addEventListener('click', verificarIdade);
