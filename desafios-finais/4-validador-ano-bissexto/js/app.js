document.addEventListener("DOMContentLoaded", function () {
    const typeEl = document.querySelector("#type");
    const dayEl = document.querySelector("#day");
    const dateInput = document.querySelector("#date");
    const button = document.querySelector("#calculateButton");
  
    const day_array = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ];
  
    const calcular_bissexto = (ano) =>
      (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0
        ? "É bissexto ✅"
        : "Não é bissexto ❌";
  
    function calcularBissexto() {
      if (!dateInput.value) {
        typeEl.innerText = "Por favor, selecione uma data.";
        dayEl.innerText = "";
        return;
      }
  
      let date_full = new Date(dateInput.value);
      let date_year = date_full.getFullYear();
  
      typeEl.innerText = calcular_bissexto(date_year);
      dayEl.innerText = day_array[date_full.getDay()];
    }
  
    button.addEventListener("click", calcularBissexto);
  });
  