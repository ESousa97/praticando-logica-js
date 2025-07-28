// 10.Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

/**
 * Função que verifica se um estudante está presente em um array de estudantes.
 * Compara profundamente os objetos para garantir igualdade.
 */
function verificarEstudante(estudantes, estudanteProcurado) {
    if (!Array.isArray(estudantes) || estudantes.some(est => typeof est !== "object" || est === null)) {
      return "Erro: O primeiro parâmetro deve ser um array de objetos.";
    }
    
    if (typeof estudanteProcurado !== "object" || estudanteProcurado === null) {
      return "Erro: O segundo parâmetro deve ser um objeto representando um estudante.";
    }
  
    return estudantes.some(estudante => 
      JSON.stringify(estudante) === JSON.stringify(estudanteProcurado)
    );
  }
  
  // Exemplo de uso:
  const estudantes = [
    { nome: "Carlos", idade: 20, curso: "Engenharia" },
    { nome: "Ana", idade: 22, curso: "Matemática" },
    { nome: "Beatriz", idade: 19, curso: "Física" }
  ];
  
  console.log(verificarEstudante(estudantes, { nome: "Ana", idade: 22, curso: "Matemática" })); // true
  console.log(verificarEstudante(estudantes, { nome: "Pedro", idade: 25, curso: "Química" })); // false
  console.log(verificarEstudante("Não é um array", { nome: "Ana", idade: 22, curso: "Matemática" })); // Erro
  console.log(verificarEstudante(estudantes, "Ana")); // Erro
  