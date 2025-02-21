document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("verificar-form");
  const resultadoEl = document.getElementById("resultado");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const n = parseInt(document.getElementById("numero").value);
    
    if (isNaN(n)) {
      resultadoEl.textContent = "Por favor, insira um número válido.";
      resultadoEl.style.color = "red";
      return;
    }
    
    let mensagem = "";
    if (n % 2 === 0) {
      mensagem = `O número ${n} é par.`;
    } else {
      mensagem = `O número ${n} é ímpar.`;
    }
    
    const metade = n / 2;
    mensagem += ` A metade do número é ${metade}.`;
    
    resultadoEl.textContent = mensagem;
    resultadoEl.style.color = "green";
    
    console.log(mensagem);
  });
});
