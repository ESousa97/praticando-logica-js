document.addEventListener("DOMContentLoaded", () => {
  const somaForm = document.getElementById("soma-form");
  const resultadoEl = document.getElementById("resultado");

  // Função que realiza a soma de dois números
  function somar(n1, n2) {
    return n1 + n2;
  }

  somaForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Recupera os valores dos inputs e converte para número
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
      resultadoEl.textContent = "Por favor, insira números válidos.";
      resultadoEl.style.color = "red";
      return;
    }

    const resultadoSoma = somar(numero1, numero2);

    // Exibe o resultado na tela
    resultadoEl.textContent = `A soma de ${numero1} + ${numero2} é igual a ${resultadoSoma}.`;
    resultadoEl.style.color = "green";

    // Exibe o resultado no console com uma mensagem amigável usando Template String
    console.log(`A soma de ${numero1} e ${numero2} é igual a ${resultadoSoma}`);
  });
});
