// Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent

function alterarTexto() {
    const elemento = document.getElementById("mensagem");
    elemento.textContent = "O texto foi alterado!";
}