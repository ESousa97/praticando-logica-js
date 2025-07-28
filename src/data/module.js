export const module = {
  id: "programacao-basica",
  title: "Aulas de Programação Básica",
  lessons: [
    {
      id: "interagindo-html",
      title: "Interagindo com HTML",
      theory:
        "Manipule elementos HTML usando JavaScript para alterar texto e cores.",
      exercise: {
        type: "code",
        question:
          "Altere o texto do elemento com id 'titulo' para 'Olá Mundo!' e mude a cor para azul.",
        placeholder:
          "document.getElementById('titulo').textContent = 'Olá Mundo!';\ndocument.getElementById('titulo').style.color = 'blue';",
        answer: [
          "document.getElementById",
          "textContent",
          "style.color",
          "'Olá Mundo!'",
          "'blue'",
        ],
        hint:
          "Use getElementById para selecionar o elemento, e textContent para alterar o texto.",
      },
    },
    {
      id: "funcoes",
      title: "Funções",
      theory: "Crie funções simples que retornam valores e executam comandos.",
      exercise: {
        type: "code",
        question:
          "Crie uma função chamada 'saudar' que retorne 'Olá!' e chame essa função para exibir o resultado.",
        placeholder:
          "function saudar() {\n  return 'Olá!';\n}\nconsole.log(saudar());",
        answer: ["function", "saudar", "return", "console.log"],
        hint: "Defina a função e use return para retornar a string.",
      },
    },
    {
      id: "reiniciando-jogo",
      title: "Reiniciando o jogo",
      theory: "Crie uma função para resetar o estado do jogo.",
      exercise: {
        type: "code",
        question: "Crie uma função chamada 'reiniciar' que zere a variável 'pontos'.",
        placeholder: "let pontos = 10;\nfunction reiniciar() {\n  pontos = 0;\n}",
        answer: ["function", "reiniciar", "pontos", "0"],
        hint: "Atribua 0 à variável pontos dentro da função.",
      },
    },
    {
      id: "listas",
      title: "Listas",
      theory: "Manipule arrays para guardar e acessar dados.",
      exercise: {
        type: "code",
        question: "Crie um array com 3 frutas e exiba a segunda fruta no console.",
        placeholder:
          "let frutas = ['maçã', 'banana', 'laranja'];\nconsole.log(frutas[1]);",
        answer: ["let", "frutas", "banana", "[1]", "console.log"],
        hint: "Arrays começam no índice 0.",
      },
    },
    {
      id: "publicando-projeto",
      title: "Publicando o projeto",
      theory: "Organize seu código e publique seu projeto.",
      exercise: {
        type: "text",
        question:
          "Explique em uma frase como você publicaria seu projeto na web.",
        placeholder:
          "Eu usaria uma plataforma como GitHub Pages ou Vercel para publicar.",
        answer: "github pages vercel",
        hint:
          "Existem várias plataformas para publicar projetos gratuitamente.",
      },
    },
  ],
};
