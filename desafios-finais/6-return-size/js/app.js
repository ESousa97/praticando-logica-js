// Função que recebe um array como parâmetro e retorna o seu tamanho
function size(arr) {
    return arr.length;
  }
  
  function verificarTamanho() {
    // Obtém o valor digitado pelo usuário
    const input = document.getElementById('arrayInput').value;
    // Converte a string em um array, removendo espaços em branco e itens vazios
    const elementos = input.split(',')
                            .map(el => el.trim())
                            .filter(el => el !== "");
    // Obtém o tamanho do array usando a função size
    const tamanho = size(elementos);
    // Exibe o resultado
    document.getElementById('result').innerText = "O tamanho do array é: " + tamanho;
  }
  