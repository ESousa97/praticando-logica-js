function alterarStatus(gameId) {
    const button = document.querySelector(`#game-${gameId} .dashboard__item__button`);
    const status = button.textContent.trim(); // Remove espaços extras no texto

    // Verifica se o botão está com o status "Alugar" ou "Devolver"
    if (status === 'Alugar') {
        // Muda para "Devolver" somente se era "Alugar"
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        button.classList.remove('dashboard__item__button--rent');
    } else if (status === 'Devolver') {
        // Antes de mudar para "Alugar", perguntar ao usuário
        if (!confirm('Deseja devolver o jogo?')) {
            alert('Devolução cancelada');
            return; // Para a execução aqui, impedindo mudanças indevidas
        }

        // Somente se o usuário confirmar, o botão volta para "Alugar"
        button.textContent = 'Alugar';
        button.classList.add('dashboard__item__button--rent');
        button.classList.remove('dashboard__item__button--return');
    }
}
