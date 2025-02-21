(function() {
    // Aguarda o carregamento do DOM para adicionar os event listeners
    document.addEventListener("DOMContentLoaded", function() {
      const buttons = document.querySelectorAll('.dashboard__item__button');
  
      buttons.forEach(button => {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          const li = button.closest('.dashboard__items__item');
          alterarStatus(li, button);
        });
      });
    });
  
    // Função para alterar o status do jogo (alugar ou devolver)
    function alterarStatus(li, button) {
      const rented = li.getAttribute('data-rented') === 'true';
  
      if (!rented) {
        // Alugar: incrementa a contagem e atualiza o estado
        let rentalCount = parseInt(li.getAttribute('data-rental-count')) || 0;
        rentalCount++;
        li.setAttribute('data-rental-count', rentalCount);
        console.log(`Jogo foi alugado ${rentalCount} vez${rentalCount > 1 ? 'es' : ''}`);
        
        li.setAttribute('data-rented', 'true');
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        button.classList.remove('dashboard__item__button--rent');
        // Atualiza a imagem para indicar que o jogo está alugado
        li.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
      } else {
        // Devolver: pergunta ao usuário antes de confirmar a devolução
        if (!confirm('Deseja devolver o jogo?')) {
          alert('Devolução cancelada');
          return;
        }
        li.setAttribute('data-rented', 'false');
        button.textContent = 'Alugar';
        button.classList.add('dashboard__item__button--rent');
        button.classList.remove('dashboard__item__button--return');
        // Remove a indicação visual de jogo alugado
        li.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
      }
    }
  })();
  