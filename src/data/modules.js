// src/data/modules.js
export const modules = [
  {
    id: "iniciante",
    title: "Iniciante",
    description: "Aprenda o básico do JavaScript, do zero!",
    color: "#50fa7b",
    lessons: [
      {
        id: "hello-world",
        title: "Seu Primeiro Código",
        theory: "Vamos começar escrevendo nosso primeiro comando em JavaScript!",
        exercise: {
          type: "code",
          question: "Mostre a mensagem 'Olá, Mundo!' no console.",
          placeholder: "console.log('Olá, Mundo!');",
          answer: ["console.log", "Olá, Mundo!"],
          hint: "Use console.log para mostrar mensagens.",
        },
      },
      {
        id: "variaveis",
        title: "Variáveis",
        theory: "Variáveis servem para guardar valores. Você pode criar com let, const ou var.",
        exercise: {
          type: "code",
          question: "Crie uma variável chamada nome e guarde seu nome.",
          placeholder: "let nome = 'SeuNome';",
          answer: ["let", "nome"],
          hint: "Use let para criar a variável.",
        },
      },
      {
        id: "soma-numeros",
        title: "Somando Números",
        theory: "Podemos fazer contas com variáveis numéricas.",
        exercise: {
          type: "code",
          question: "Crie duas variáveis com números e mostre a soma.",
          placeholder: "let a = 5;\nlet b = 3;\nconsole.log(a + b);",
          answer: ["let", "a", "b", "console.log", "+"],
          hint: "Use + para somar.",
        },
      },
    ],
  },
  {
    id: "intermediario",
    title: "Intermediário",
    description: "Controle o fluxo do seu código e repita tarefas.",
    color: "#8be9fd",
    lessons: [
      {
        id: "condicionais",
        title: "If e Else",
        theory: "Com if/else, você toma decisões no seu código.",
        exercise: {
          type: "code",
          question:
            "Verifique se uma idade é maior ou igual a 18 e mostre 'Maior de idade' ou 'Menor de idade' no console.",
          placeholder:
            "let idade = 20;\nif (idade >= 18) {\n  console.log('Maior de idade');\n} else {\n  console.log('Menor de idade');\n}",
          answer: ["if", "else", "idade", "console.log"],
          hint: "Compare idade com 18.",
        },
      },
      {
        id: "for-listas",
        title: "Listas e For",
        theory: "Listas guardam vários valores. O for percorre a lista.",
        exercise: {
          type: "code",
          question: "Percorra um array de nomes e mostre cada nome no console.",
          placeholder:
            "let nomes = ['Ana', 'Bia', 'Carlos'];\nfor (let i = 0; i < nomes.length; i++) {\n  console.log(nomes[i]);\n}",
          answer: ["let", "for", "nomes", "console.log"],
          hint: "Use for para percorrer listas.",
        },
      },
    ],
  },
  {
    id: "avancado",
    title: "Avançado",
    description: "Interaja com a página e escreva funções úteis.",
    color: "#ffb86c",
    lessons: [
      {
        id: "dom-basico",
        title: "Manipulando HTML (DOM)",
        theory: "Com JavaScript, você pode alterar elementos da página.",
        exercise: {
          type: "code",
          question: "Troque o texto de um elemento com id 'titulo' para 'Bem-vindo!'",
          placeholder:
            "document.getElementById('titulo').textContent = 'Bem-vindo!';",
          answer: ["getElementById", "titulo", "textContent", "Bem-vindo!"],
          hint: "Selecione o elemento e mude o texto.",
        },
      },
      {
        id: "funcoes-param",
        title: "Funções com Parâmetro",
        theory: "Funções podem receber dados para trabalhar.",
        exercise: {
          type: "code",
          question: "Crie uma função que receba um número e mostre seu dobro.",
          placeholder:
            "function mostrarDobro(n) {\n  console.log(n * 2);\n}\nmostrarDobro(5);",
          answer: ["function", "mostrarDobro", "console.log", "* 2"],
          hint: "Multiplique n por 2.",
        },
      },
    ],
  },
  {
    id: "hardcore",
    title: "Hardcore",
    description: "Desafios e miniprojetos para você testar tudo!",
    color: "#ff5555",
    lessons: [
      {
        id: "mini-jogo",
        title: "Mini Jogo: Número Secreto",
        theory:
          "Vamos criar um jogo simples: o usuário tenta adivinhar um número de 1 a 10.",
        exercise: {
          type: "code",
          question:
            "Implemente um código que sorteia um número de 1 a 10 e verifica se o palpite está certo.",
          placeholder:
            "// Sorteie um número aleatório entre 1 e 10\nlet secreto = Math.floor(Math.random() * 10) + 1;\n// Peça ao usuário um palpite (use prompt em JS puro)\nlet palpite = /* seu código aqui */;\n// Mostre se acertou ou não\nif (palpite == secreto) {\n  alert('Acertou!');\n} else {\n  alert('Tente de novo! O número era ' + secreto);\n}",
          answer: ["Math.random", "prompt", "if", "alert"],
          hint: "Use prompt para pegar o número do usuário.",
        },
      },
      {
        id: "publicar-projeto",
        title: "Publicar na Web",
        theory: "Vamos aprender como colocar seu projeto no ar.",
        exercise: {
          type: "text",
          question: "Qual serviço gratuito pode ser usado para publicar sites estáticos?",
          placeholder: "Digite aqui (exemplo: GitHub Pages, Vercel, Netlify...)",
          answer: "github pages",
          hint: "Existem vários, cite um!",
        },
      },
    ],
  },
];
