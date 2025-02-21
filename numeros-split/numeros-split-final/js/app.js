// Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('numero-form');
    const textarea = document.getElementById('numeros');
    const resultadoDiv = document.getElementById('resultado');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Previne o recarregamento da página
  
      const inputText = textarea.value;
      
      // Valida se o campo não está vazio
      if (inputText.trim() === "") {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, insira números separados por vírgulas.</p>";
        return;
      }
  
      // Separa os números, removendo espaços extras e descartando entradas vazias
      const numerosArray = inputText.split(',')
                                    .map(num => num.trim())
                                    .filter(num => num !== "");
  
      console.log("Números separados:", numerosArray);
  
      // Cria uma lista para exibir os números
      let html = "<ul>";
      numerosArray.forEach((num, index) => {
        html += `<li><strong>${index + 1}.</strong> ${num}</li>`;
      });
      html += "</ul>";
  
      resultadoDiv.innerHTML = html;
    });
  });
  