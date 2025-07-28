//Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

document.addEventListener('DOMContentLoaded', () => {
    const btnProcessar = document.getElementById('btnProcessar');
    const textarea = document.getElementById('texto');
    const resultadoDiv = document.getElementById('resultado');
  
    btnProcessar.addEventListener('click', () => {
      const texto = textarea.value;
  
      // Verifica se há conteúdo no textarea
      if (!texto.trim()) {
        resultadoDiv.innerHTML = '<p style="color: red;">Por favor, insira algum texto.</p>';
        return;
      }
  
      // Divide a string utilizando ";" como delimitador, remove espaços extras e descarta entradas vazias
      const frases = texto.split(';')
                          .map(frase => frase.trim())
                          .filter(frase => frase.length > 0);
  
      // Se nenhuma frase válida for encontrada
      if (frases.length === 0) {
        resultadoDiv.innerHTML = '<p style="color: red;">Nenhuma frase válida encontrada.</p>';
        return;
      }
  
      // Exibe o total de frases encontradas
      resultadoDiv.innerHTML = `<p><strong>Total de frases:</strong> ${frases.length}</p>`;
  
      // Cria uma lista não ordenada para exibir as frases
      const ul = document.createElement('ul');
      ul.style.listStyleType = 'none';
      ul.style.paddingLeft = '0';
      frases.forEach((frase, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${index + 1}.</strong> ${frase}`;
        ul.appendChild(li);
      });
      resultadoDiv.appendChild(ul);
  
      // Também exibe as frases no console
      console.log(frases);
    });
  });
  