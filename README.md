<div align="center">

# Praticando Lógica com JavaScript

[![CI](https://img.shields.io/github/actions/workflow/status/ESousa97/praticando-logica-js/ci.yml?branch=main&style=flat&logo=github-actions&logoColor=white)](https://github.com/ESousa97/praticando-logica-js/actions/workflows/ci.yml)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/ESousa97/praticando-logica-js?style=flat&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/esousa97/praticando-logica-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Archived-lightgrey.svg?style=flat&logo=archive&logoColor=white)](#)

**Plataforma interativa de exercícios para dominar lógica de programação com JavaScript — módulos progressivos do iniciante ao avançado, sistema de gamificação com badges, terminal de prática e dashboard de progresso — Vue 3, Pinia, Tailwind CSS e Vite.**

[Demo](https://praticando-logica-js.vercel.app/)

</div>

---

> **⚠️ Projeto Arquivado**
> Este projeto não recebe mais atualizações ou correções. O código permanece disponível como referência e pode ser utilizado livremente sob a licença MIT. Fique à vontade para fazer fork caso deseje continuar o desenvolvimento.

<div align="center">

![Demonstração](./assets/praticando-logica-js.gif)

</div>

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Uso Local](#uso-local)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Qualidade e Governança](#qualidade-e-governança)
- [Deploy](#deploy)
- [FAQ](#faq)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

Plataforma web interativa para aprendizado de lógica de programação com JavaScript. O projeto combina exercícios práticos organizados em módulos progressivos com um sistema de gamificação (pontos, badges, progresso) para manter o engajamento. Além da aplicação Vue, o repositório inclui exercícios vanilla JS independentes no diretório `base/`.

O repositório prioriza:

- **Exercícios interativos** — Feedback imediato em cada exercício com validação em tempo real
- **Módulos progressivos** — Do iniciante ao avançado, com dificuldade gradual
- **Gamificação** — Badges por módulo completado e dashboard de acompanhamento
- **Vue 3 Composition API** — Componentes tipados com Pinia para estado global e Vue Router para navegação
- **Exercícios vanilla JS** — Projetos independentes (sorteador, alugames, carrinho de compras) no diretório `base/`

---

## Funcionalidades

- **Módulos progressivos** — Exercícios organizados por nível de dificuldade do iniciante ao avançado
- **Feedback imediato** — Validação em tempo real com mensagens contextuais para cada resposta
- **Sistema de progresso** — Dashboard visual com métricas de lições completadas e evolução
- **Gamificação** — Badges desbloqueáveis ao completar módulos e conquistas
- **Exercícios vanilla JS** — Projetos independentes (sorteador de números, alugames, carrinho de compras) fora do framework
- **Design responsivo** — Interface adaptativa com Tailwind CSS para desktop e mobile

---

## Tecnologias

### Core

![Vue.js](https://img.shields.io/badge/Vue.js_3-4FC08D?style=flat&logo=vue.js&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=flat&logoColor=black)
![Vue Router](https://img.shields.io/badge/Vue_Router-4FC08D?style=flat&logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

### Ferramentas de Desenvolvimento

![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)
![Lucide](https://img.shields.io/badge/Lucide_Vue-F56565?style=flat&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

**Requisitos mínimos:**

- Node.js 18+ e npm 9+
- Navegador moderno (Chrome, Firefox, Safari, Edge)

---

## Estrutura do Projeto

```
praticando-logica-js/
├── src/
│   ├── components/        # Componentes Vue reutilizáveis
│   ├── views/             # Páginas da aplicação
│   ├── router/            # Configuração de rotas (Vue Router)
│   ├── stores/            # Estado global (Pinia)
│   ├── data/              # Dados dos módulos e exercícios
│   ├── App.vue            # Componente raiz
│   ├── main.js            # Entry point
│   └── style.css          # Estilos globais
├── base/                  # Exercícios vanilla JS independentes
│   ├── sorteador-de-numeros/
│   ├── alugames/
│   ├── carrinho-de-compras/
│   └── ...
├── assets/
│   └── praticando-logica-js.gif  # GIF demonstrativo
├── .github/
│   └── workflows/
│       └── ci.yml         # Pipeline CI
├── package.json           # Dependências e scripts
├── vite.config.ts         # Configuração Vite
├── tailwind.config.js     # Configuração Tailwind
├── eslint.config.js       # Configuração ESLint
├── CONTRIBUTING.md        # Guia de contribuição
└── LICENSE                # Licença MIT
```

---

## Começando

### Pré-requisitos

```bash
node --version  # v18 ou superior
npm --version   # v9 ou superior
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/ESousa97/praticando-logica-js.git
cd praticando-logica-js
```

2. **Instale as dependências**

```bash
npm install
```

### Uso Local

```bash
npm run dev
```

Acesse: `http://localhost:3000/`

**Produção:** [praticando-logica-js.vercel.app](https://praticando-logica-js.vercel.app/)

---

## Scripts Disponíveis

```bash
# Desenvolvimento com HMR
npm run dev

# Build de produção
npm run build

# Preview do build local
npm run preview

# Lint (ESLint)
npm run lint

# Lint com correção automática
npm run lint:fix

# Formatação (Prettier)
npm run format

# Testes unitários (Vitest)
npm run test

# Testes com cobertura
npm run test:coverage
```

---

## Qualidade e Governança

O projeto adota práticas de governança para manter a qualidade do código:

- **CI** — Pipeline com lint e testes via GitHub Actions
- **Testes** — Testes unitários com Vitest
- **Linting** — ESLint + Prettier para consistência
- **Code Quality** — Análise contínua via CodeFactor

> Para diretrizes de contribuição, consulte [`CONTRIBUTING.md`](CONTRIBUTING.md).

---

## Deploy

### Vercel (Produção)

Deploy contínuo automatizado via integração GitHub. Cada push na branch `main` aciona build e deploy, com URLs de preview para Pull Requests.

---

## FAQ

<details>
<summary><strong>Qual a diferença entre os exercícios Vue e os do diretório base/?</strong></summary>

Os exercícios dentro de `src/` fazem parte da plataforma Vue com gamificação e progresso. O diretório `base/` contém projetos vanilla JS independentes (sorteador, alugames, carrinho) que podem ser executados diretamente no navegador sem framework.
</details>

<details>
<summary><strong>Preciso saber Vue.js para usar a plataforma?</strong></summary>

Não. A plataforma é voltada para quem quer aprender lógica de programação com JavaScript — não é necessário conhecimento de Vue para completar os exercícios.
</details>

<details>
<summary><strong>O progresso é salvo entre sessões?</strong></summary>

Sim. Progresso, badges e estado dos módulos são persistidos localmente no navegador.
</details>

<details>
<summary><strong>Posso contribuir com novos exercícios?</strong></summary>

Sim. Consulte o [`CONTRIBUTING.md`](CONTRIBUTING.md) para diretrizes. Novos exercícios podem ser adicionados tanto na plataforma Vue quanto como projetos vanilla JS no diretório `base/`.
</details>

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - você pode usar, copiar, modificar e distribuir este código.
```

---

## Contato

**José Enoque Costa de Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=todoist&logoColor=white)](https://enoquesousa.vercel.app)

---

<div align="center">

**[⬆ Voltar ao topo](#praticando-lógica-com-javascript)**

Feito com ❤️ por [José Enoque](https://github.com/ESousa97)

**Status do Projeto:** Archived — Sem novas atualizações

</div>
