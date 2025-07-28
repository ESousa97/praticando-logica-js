// 5 - Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar

// Fórmula da conversão: F = 9 / 5 * C + 32
// Fórmula da conversão: C = 5 / 9 * (F - 32)

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

// Exemplos de uso
console.log(converterTemperatura(30, "C")); // Deve retornar 86°F
console.log(converterTemperatura(86, "F")); // Deve retornar 30°C
console.log(converterTemperatura(100, "X")); // Retorna erro de escala inválida



