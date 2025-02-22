/**
 * Função que recebe um array de números e retorna
 * um objeto com a soma dos elementos pares e o produto dos ímpares.
 */
function calculateEvenSumOddProduct(array) {
    let sumEvens = 0;
    let productOdds = 1;
    
    array.forEach(num => {
      if (num % 2 === 0) {
        sumEvens += num;
      } else {
        productOdds *= num;
      }
    });
    
    return { sumEvens, productOdds };
  }
  
  // Evento para processar o formulário
  document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputValue = document.getElementById('numbersInput').value;
    // Divide a string em partes, remove espaços e converte para número
    let numbers = inputValue.split(',')
                            .map(item => parseFloat(item.trim()))
                            .filter(item => !isNaN(item));
    
    if (numbers.length === 0) {
      document.getElementById('result').innerText = "Por favor, insira números válidos.";
      return;
    }
    
    const result = calculateEvenSumOddProduct(numbers);
    document.getElementById('result').innerText = `Soma dos pares: ${result.sumEvens}\nProduto dos ímpares: ${result.productOdds}`;
  });
  