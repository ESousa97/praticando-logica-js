function alterarStatus(gameId) {
    const button = document.querySelector(`#game-${gameId} .dashboard__item__button`);
    const status = button.textContent; // Obtém o texto atual do botão (Alugar ou Devolver)

    // Verifica se o botão está com o status "Alugar" ou "Devolver"
    if (status === 'Alugar') {
        // Altera para "Devolver"
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        button.classList.remove('dashboard__item__button--rent'); // Remove a classe de alugar
    } else {
        // Altera para "Alugar"
        button.textContent = 'Alugar';
        button.classList.add('dashboard__item__button--rent');
        button.classList.remove('dashboard__item__button--return'); // Remove a classe de devolver
    }
}