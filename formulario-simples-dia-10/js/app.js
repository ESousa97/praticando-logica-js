// Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

function capturarValores() {
    // Pegando os valores dos inputs
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var idade = document.getElementById('idade').value;

    // Exibindo os valores no console
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Idade:", idade);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Nome: ${nome}</p>
        <p>Email: ${email}</p>
        <p>Idade: ${idade}</p>
    `;
}

