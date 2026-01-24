# Contribuindo para o Praticando Lógica JS

Obrigado pelo interesse em contribuir! Este documento fornece diretrizes para contribuições.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Commits](#commits)
- [Pull Requests](#pull-requests)

## 📜 Código de Conduta

Este projeto adota o [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar, você concorda em seguir suas diretrizes.

## 🚀 Como Contribuir

### Reportando Bugs

1. Verifique se o bug já não foi reportado em [Issues](https://github.com/ESousa97/praticando-logica-js/issues)
2. Se não encontrar, abra uma nova issue usando o template de Bug Report
3. Inclua o máximo de detalhes possível

### Sugerindo Melhorias

1. Verifique se a sugestão já não existe em [Issues](https://github.com/ESousa97/praticando-logica-js/issues)
2. Abra uma nova issue usando o template de Feature Request
3. Descreva claramente a melhoria e seu benefício

### Contribuindo com Código

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça suas alterações
4. Commit suas mudanças seguindo as convenções
5. Push para a branch (`git push origin feature/nova-feature`)
6. Abra um Pull Request

## ⚙️ Configuração do Ambiente

```bash
# Clone seu fork
git clone https://github.com/SEU_USUARIO/praticando-logica-js.git

# Entre no diretório
cd praticando-logica-js

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

| Comando            | Descrição                         |
| ------------------ | --------------------------------- |
| `npm run dev`      | Servidor de desenvolvimento       |
| `npm run build`    | Build de produção                 |
| `npm run lint`     | Verifica problemas de código      |
| `npm run lint:fix` | Corrige problemas automaticamente |
| `npm run format`   | Formata o código                  |
| `npm run test`     | Executa os testes                 |

## 📝 Padrões de Código

### JavaScript/Vue

- Use ES6+ features
- Prefira `const` sobre `let`, evite `var`
- Use arrow functions quando apropriado
- Componentes Vue devem usar `<script setup>`

### CSS

- Use as classes do Tailwind CSS
- Evite estilos inline
- Use os design tokens definidos em `tailwind.config.js`

### Formatação

O projeto usa ESLint e Prettier. Execute antes de commitar:

```bash
npm run lint:fix
npm run format
```

## 💬 Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos

| Tipo       | Descrição                     |
| ---------- | ----------------------------- |
| `feat`     | Nova funcionalidade           |
| `fix`      | Correção de bug               |
| `docs`     | Apenas documentação           |
| `style`    | Formatação (não afeta código) |
| `refactor` | Refatoração de código         |
| `perf`     | Melhoria de performance       |
| `test`     | Adição/correção de testes     |
| `chore`    | Manutenção/configs            |

### Exemplos

```bash
feat(modules): adiciona novo módulo de arrays
fix(progress): corrige salvamento no localStorage
docs(readme): atualiza instruções de instalação
```

## 🔀 Pull Requests

1. Atualize sua branch com a main antes de abrir o PR
2. Preencha o template do PR completamente
3. Garanta que todos os checks passem (lint, tests, build)
4. Aguarde a revisão de um maintainer

### Checklist do PR

- [ ] Código segue os padrões do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Commits seguem convenção
- [ ] Todos os checks passando

## ❓ Dúvidas?

Abra uma [Discussion](https://github.com/ESousa97/praticando-logica-js/discussions) ou entre em contato.

---

Obrigado por contribuir! 🎉
