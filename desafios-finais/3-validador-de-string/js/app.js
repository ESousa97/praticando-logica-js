function validatorString(string) {
    if (string.trim() === "") {
        return []; // Retorna um array vazio se a string for vazia
    }
    
    return string.split(',').map(item => parseInt(item.trim(), 10)).filter(num => !isNaN(num));
}

document.getElementById('validateButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const result = document.getElementById('result');

    const validatedArray = validatorString(inputString);

    if (validatedArray.length === 0) {
        result.textContent = "A string está vazia ou não contém números válidos.";
    } else {
        result.textContent = `Array validado: [${validatedArray.join(', ')}]`;
    }
});
