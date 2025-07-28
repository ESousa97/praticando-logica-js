document.addEventListener("DOMContentLoaded", function(){
    const mensagemEl = document.getElementById("mensagem");
    const btnAlterar = document.getElementById("btnAlterar");
    const btnReset = document.getElementById("btnReset");
    const inputNovoTexto = document.getElementById("novoTexto");
    
    const textoOriginal = mensagemEl.textContent;
  
    btnAlterar.addEventListener("click", function(){
      const novoTexto = inputNovoTexto.value.trim();
      if(novoTexto === ""){
        alert("Por favor, insira um texto válido.");
        return;
      }
      mensagemEl.textContent = novoTexto;
      mensagemEl.style.color = "green";
      mensagemEl.style.transform = "scale(1.05)";
      setTimeout(() => {
        mensagemEl.style.transform = "scale(1)";
      }, 300);
    });
  
    btnReset.addEventListener("click", function(){
      mensagemEl.textContent = textoOriginal;
      mensagemEl.style.color = "blue";
      inputNovoTexto.value = "";
    });
  });
  