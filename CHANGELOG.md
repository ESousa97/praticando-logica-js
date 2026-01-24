# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Adicionado

- Configuração completa de Tailwind CSS local (removido CDN)
- ESLint e Prettier para qualidade de código
- Vitest para testes automatizados
- GitHub Actions para CI/CD
- Dependabot para atualizações automáticas
- Templates de Issue e Pull Request
- Documentação de governança (CONTRIBUTING, CODE_OF_CONDUCT, SECURITY)
- Design tokens centralizados em `tailwind.config.js`
- Componentes CSS reutilizáveis em `style.css`

### Alterado

- Renomeado `PraticeArea.vue` para `PracticeArea.vue` (correção de typo)
- Atualizado `package.json` com metadados completos
- Melhorada estrutura do `.gitignore`
- Atualizado título da página para ser mais descritivo

### Corrigido

- Removida dependência de CDN externo (Tailwind)
- Corrigido `package-lock.json` no `.gitignore` (agora é commitado)

### Segurança

- Adicionado `.editorconfig` para consistência de código
- Adicionado `.gitattributes` para normalização de line endings
- Configurado lint-staged para validação pré-commit

## [2.0.0] - 2025-01-15

### Adicionado

- Migração para Vue.js 3 com Composition API
- Sistema de progresso com Pinia
- Navegação SPA com Vue Router
- Ícones com lucide-vue-next
- Deploy na Vercel

### Alterado

- Arquitetura completa do projeto
- Interface moderna com gradientes

## [1.0.0] - 2024-12-01

### Adicionado

- Versão inicial com exercícios vanilla JavaScript
- Coleção de mini-projetos educacionais
- README documentado

---

[Unreleased]: https://github.com/ESousa97/praticando-logica-js/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/ESousa97/praticando-logica-js/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/ESousa97/praticando-logica-js/releases/tag/v1.0.0
