// Funções compartilhadas para o amigo secreto

function embaralharArray(array) {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
}

function gerarResultadoSorteio(amigosEmbaralhados) {
    let resultado = "";
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigo = amigosEmbaralhados[i];
        const amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
        resultado += `<span>${amigo} → ${amigoSecreto}</span><br/>`;
    }
    return resultado;
}

function removerAmigoDoArray(amigosArray, index, atualizarCallback) {
    amigosArray.splice(index, 1);
    atualizarCallback();
}

function realizarSorteio(amigosArray) {
    if (amigosArray.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!");
        return null;
    }
    return embaralharArray(amigosArray);
}

function reiniciarAplicacao(amigosArray) {
    amigosArray.length = 0;
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}
