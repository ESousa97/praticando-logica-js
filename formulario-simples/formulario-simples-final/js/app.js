// Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("meuFormulario");
  
    // Impede o envio padrão do formulário e captura os valores
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      capturarValores();
    });
  });
  
  function capturarValores() {
    // Recupera os valores dos inputs
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;
  
    // Exibe os valores no console
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Idade:", idade);
  
    // Exibe os valores na tela
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <p>Nome: ${nome}</p>
      <p>E-mail: ${email}</p>
      <p>Idade: ${idade}</p>
    `;
  }  
  