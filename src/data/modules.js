export const modules = [
  {
    id: "iniciante",
    title: "Iniciante",
    description: "Aprenda o básico do JavaScript, do zero!",
    color: "from-green-400 to-green-600",
    lessons: [
      {
        id: "hello-world",
        title: "Seu Primeiro Código",
        theory: "Vamos começar escrevendo nosso primeiro comando em JavaScript! O console.log é usado para mostrar mensagens no console do navegador.",
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
        theory: "Variáveis servem para guardar valores. Você pode criar com let, const ou var. Use let para valores que podem mudar e const para valores fixos.",
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
        theory: "Podemos fazer operações matemáticas com variáveis numéricas. O operador + é usado para somar valores.",
        exercise: {
          type: "code",
          question: "Crie duas variáveis com números e mostre a soma.",
          placeholder: "let a = 5;\nlet b = 3;\nconsole.log(a + b);",
          answer: ["let", "a", "b", "console.log", "+"],
          hint: "Use + para somar os valores.",
        },
      },
    ],
  },
  {
    id: "intermediario",
    title: "Intermediário",
    description: "Controle o fluxo do seu código e repita tarefas.",
    color: "from-blue-400 to-blue-600",
    lessons: [
      {
        id: "condicionais",
        title: "If e Else",
        theory: "Com if/else, você toma decisões no seu código. Se uma condição for verdadeira, executa um bloco, senão executa outro.",
        exercise: {
          type: "code",
          question: "Verifique se uma idade é maior ou igual a 18 e mostre 'Maior de idade' ou 'Menor de idade'.",
          placeholder: "let idade = 20;\nif (idade >= 18) {\n  console.log('Maior de idade');\n} else {\n  console.log('Menor de idade');\n}",
          answer: ["if", "else", "idade", "console.log"],
          hint: "Compare idade com 18 usando >=",
        },
      },
      {
        id: "for-listas",
        title: "Listas e For",
        theory: "Arrays (listas) guardam vários valores. O loop for percorre cada item da lista permitindo executar ações em todos os elementos.",
        exercise: {
          type: "code",
          question: "Percorra um array de nomes e mostre cada nome no console.",
          placeholder: "let nomes = ['Ana', 'Bia', 'Carlos'];\nfor (let i = 0; i < nomes.length; i++) {\n  console.log(nomes[i]);\n}",
          answer: ["let", "for", "nomes", "console.log"],
          hint: "Use for com length para percorrer todo o array.",
        },
      },
    ],
  },
  {
    id: "avancado",
    title: "Avançado",
    description: "Interaja com a página e escreva funções úteis.",
    color: "from-orange-400 to-orange-600",
    lessons: [
      {
        id: "dom-basico",
        title: "Manipulando HTML (DOM)",
        theory: "Com JavaScript, você pode alterar elementos da página web. O DOM permite selecionar elementos e modificar seu conteúdo.",
        exercise: {
          type: "code",
          question: "Troque o texto de um elemento com id 'titulo' para 'Bem-vindo!'",
          placeholder: "document.getElementById('titulo').textContent = 'Bem-vindo!';",
          answer: ["getElementById", "titulo", "textContent", "Bem-vindo!"],
          hint: "Use getElementById para selecionar e textContent para alterar o texto.",
        },
      },
      {
        id: "funcoes-param",
        title: "Funções com Parâmetro",
        theory: "Funções são blocos de código reutilizáveis. Podem receber parâmetros (dados) para trabalhar e retornar resultados.",
        exercise: {
          type: "code",
          question: "Crie uma função que receba um número e mostre seu dobro.",
          placeholder: "function mostrarDobro(n) {\n  console.log(n * 2);\n}\nmostrarDobro(5);",
          answer: ["function", "mostrarDobro", "console.log", "* 2"],
          hint: "Multiplique o parâmetro n por 2.",
        },
      },
    ],
  },
  {
    id: "hardcore",
    title: "Hardcore",
    description: "Desafios e miniprojetos para você testar tudo!",
    color: "from-red-400 to-red-600",
    lessons: [
      {
        id: "mini-jogo",
        title: "Mini Jogo: Número Secreto",
        theory: "Vamos criar um jogo interativo! O usuário tentará adivinhar um número aleatório de 1 a 10. Isso combina vários conceitos aprendidos.",
        exercise: {
          type: "code",
          question: "Implemente um código que sorteia um número de 1 a 10 e verifica se o palpite está certo.",
          placeholder: "// Sorteie um número aleatório entre 1 e 10\nlet secreto = Math.floor(Math.random() * 10) + 1;\n// Peça ao usuário um palpite\nlet palpite = prompt('Adivinhe o número (1-10):');\n// Mostre se acertou ou não\nif (palpite == secreto) {\n  alert('Acertou!');\n} else {\n  alert('Tente de novo! O número era ' + secreto);\n}",
          answer: ["Math.random", "prompt", "if", "alert"],
          hint: "Use Math.random() para sortear e prompt() para pegar input do usuário.",
        },
      },
      {
        id: "publicar-projeto",
        title: "Publicar na Web",
        theory: "Depois de criar seus projetos, é hora de compartilhá-los! Existem várias plataformas gratuitas para hospedar sites.",
        exercise: {
          type: "text",
          question: "Qual serviço gratuito pode ser usado para publicar sites estáticos?",
          placeholder: "Digite aqui (exemplo: GitHub Pages, Vercel, Netlify...)",
          answer: "github pages",
          hint: "GitHub oferece uma opção gratuita para hospedar sites estáticos.",
        },
      },
    ],
  },
]
