// 4.Crie uma função que determine se um ano é bissexto

/**
 * Função que verifica se um ano é bissexto.
 * Retorna true se o ano for bissexto, e false caso contrário.
 */
function verificarAnoBissexto(ano) {
    if (typeof ano !== 'number' || isNaN(ano) || ano < 1) {
      return "Ano inválido! Por favor, insira um ano válido.";
    }
    
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) 
      ? "O ano é bissexto." 
      : "O ano não é bissexto.";
  }
  
  // Exemplo de uso:
  console.log(verificarAnoBissexto(2024)); // O ano é bissexto.
  console.log(verificarAnoBissexto(2023)); // O ano não é bissexto.
  console.log(verificarAnoBissexto(2000)); // O ano é bissexto.
  console.log(verificarAnoBissexto(1900)); // O ano não é bissexto.
  console.log(verificarAnoBissexto("abc")); // Ano inválido! Por favor, insira um ano válido.
  console.log(verificarAnoBissexto(-500));  // Ano inválido! Por favor, insira um ano válido.
  