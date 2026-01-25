// Funções utilitárias compartilhadas para o projeto Amigo Secreto

/**
 * Embaralha um array usando o algoritmo Fisher-Yates
 * @param {Array} array - O array a ser embaralhado
 * @returns {Array} - O array embaralhado
 */
function embaralharArray(array) {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

/**
 * Gera o resultado do sorteio
 * @param {Array} amigosEmbaralhados - Array de amigos embaralhado
 * @returns {string} - HTML com o resultado do sorteio
 */
function gerarResultadoSorteio(amigosEmbaralhados) {
  let resultado = "";
  for (let i = 0; i < amigosEmbaralhados.length; i++) {
    const amigo = amigosEmbaralhados[i];
    const amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
    resultado += `<span>${amigo} → ${amigoSecreto}</span><br/>`;
  }
  return resultado;
}
