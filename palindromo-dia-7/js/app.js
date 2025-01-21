document.getElementById("palindrome-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const input = document.getElementById("palavra").value;
    const resultado = document.getElementById("resultado");

    if (isPalindrome(input)) {
        resultado.textContent = `"${input}" é um palíndromo!`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `"${input}" não é um palíndromo.`;
        resultado.style.color = "red";
    }
});

function isPalindrome(str) {
    // Remover espaços, pontuação e converter para minúsculas
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Verificar se a string normalizada é igual à sua versão invertida
    return cleanStr === cleanStr.split("").reverse().join("");
}
