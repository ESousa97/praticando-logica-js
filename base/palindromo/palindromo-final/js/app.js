document.getElementById("palindrome-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página
  
    const input = document.getElementById("palavra").value.trim();
    const resultado = document.getElementById("resultado");
  
    if (!input) {
      resultado.textContent = "Por favor, insira uma palavra ou frase.";
      resultado.style.color = "orange";
      return;
    }
  
    if (isPalindrome(input)) {
      resultado.textContent = `"${input}" é um palíndromo!`;
      resultado.style.color = "green";
    } else {
      resultado.textContent = `"${input}" não é um palíndromo.`;
      resultado.style.color = "red";
    }
  });
  
  function isPalindrome(str) {
    // Remove espaços, pontuação e converte para minúsculas
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Compara a string limpa com sua versão invertida
    return cleanStr === cleanStr.split("").reverse().join("");
  }
  