// 5 - Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar

// Fórmula da conversão: F = 9 / 5 * C + 32
// Fórmula da conversão: C = 5 / 9 * (F - 32)

// Função que realiza a conversão de temperatura
function converterTemperatura(temperatura, escala) {
    if (escala === "C") {
        // Converte de Celsius para Fahrenheit
        return (9 / 5 * temperatura) + 32;
    } else if (escala === "F") {
        // Converte de Fahrenheit para Celsius
        return (5 / 9) * (temperatura - 32);
    } else {
        return "Erro: Escala inválida. Use 'C' para Celsius ou 'F' para Fahrenheit.";
    }
}

// Configuração da interface após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('converter-form');
  const resultadoDiv = document.getElementById('resultado');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    const temperaturaInput = document.getElementById('temperatura').value;
    const escala = document.getElementById('escala').value;
    const temperatura = parseFloat(temperaturaInput);

    if (isNaN(temperatura)) {
      resultadoDiv.textContent = "Por favor, insira um valor numérico válido.";
      return;
    }

    const resultado = converterTemperatura(temperatura, escala);
    let textoResultado;
    if (escala === "C") {
      textoResultado = `${temperatura}°C equivalem a ${resultado.toFixed(2)}°F`;
    } else if (escala === "F") {
      textoResultado = `${temperatura}°F equivalem a ${resultado.toFixed(2)}°C`;
    } else {
      textoResultado = resultado;
    }
    resultadoDiv.textContent = textoResultado;
  });
});
