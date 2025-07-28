# Sorteador de Números Aleatórios

Este projeto implementa uma aplicação web que permite ao usuário sortear uma quantidade especificada de números aleatórios dentro de um intervalo definido. Ele utiliza JavaScript para processar a lógica do sorteio e manipular elementos dinâmicos da página.

## Funcionalidades

- **Definir intervalo**: O usuário pode especificar o intervalo de números (valor inicial e final).
- **Selecionar quantidade**: É possível determinar quantos números devem ser sorteados.
- **Validar entradas**: O sistema realiza validações, como:
  - Garantir que o valor inicial seja menor que o valor final.
  - Certificar-se de que a quantidade solicitada não exceda a quantidade total de números no intervalo.
- **Evitar duplicatas**: Não há repetições entre os números sorteados.
- **Reiniciar sorteio**: O botão "Reiniciar" redefine os campos e o resultado.
- **Interface dinâmica**: Os elementos da página são manipulados dinamicamente para refletir o estado atual.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização dos elementos.
- **JavaScript**: Implementação da lógica do sorteio e manipulação do DOM.

## Como Funciona

### 1. Entrada de Dados
O usuário insere:
- **Quantidade**: Número de elementos a serem sorteados.
- **Intervalo**: Valores "De" e "Até" para definir o intervalo de sorteio.

### 2. Sorteio dos Números
A função `sortear`:
- Valida as entradas:
  - Verifica se o valor inicial é menor que o final.
  - Garante que a quantidade solicitada seja possível.
- Gera números aleatórios utilizando a função `Math.random` dentro do intervalo especificado.
- Adiciona os números ao array de resultados, garantindo que não haja duplicatas.
- Exibe os resultados no elemento `#resultado`.

### 3. Botão Reiniciar
A função `reiniciar`:
- Limpa os campos de entrada.
- Redefine o texto do elemento de resultados.
- Alterna o estado do botão "Reiniciar".

## Estrutura do Código

### Funções Implementadas

#### `sortear()`
Realiza o sorteio de números aleatórios e exibe o resultado.
- **Validações**:
  - O valor "De" deve ser menor que o valor "Até".
  - A quantidade de números solicitada deve ser válida.
- **Lógica de Sorteio**:
  - Utiliza um laço `for` para gerar números aleatórios.
  - Garante que não haja duplicatas usando o método `includes`.

#### `obterNumeroAleatorio(min, max)`
Gera um número aleatório dentro de um intervalo definido.
- Utiliza `Math.random` para gerar o valor.

#### `alterarStatusBotao()`
Alterna a classe CSS do botão "Reiniciar" para ativar ou desativar a funcionalidade.
- Verifica se o botão possui uma classe específica usando `classList.contains`.
- Adiciona ou remove classes usando `classList.add` e `classList.remove`.

#### `reiniciar()`
Restaura o estado inicial da aplicação:
- Limpa os valores dos campos de entrada.
- Redefine o conteúdo do elemento de resultados.
- Alterna o estado do botão "Reiniciar".

## O que Você Aprende com Este Projeto

### Manipulação do DOM
- Uso de `document.getElementById` para acessar elementos.
- Recuperação de valores de campos de entrada via `value`.
- Modificação de conteúdo HTML usando `innerHTML`.

### JavaScript
- **Estruturas Condicionais**:
  - Validação de entradas com `if` e `else`.
- **Laços de Repetição**:
  - Uso de `for` para iterar sobre números aleatórios.
- **Manipulação de Arrays**:
  - Adição de elementos com `push`.
  - Verificação de elementos duplicados com `includes`.

### Estilização Dinâmica
- Alterar classes CSS de elementos usando:
  - `classList.add`
  - `classList.remove`
  - `classList.contains`

### Utilização de Funções
- Modularização do código com funções reutilizáveis.
- Geração de números aleatórios com `Math.random`.

### Outras Práticas
- Uso de `parseInt` para converter strings em números inteiros.
- Concatenar valores dinamicamente com Template Strings.

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone <URL-do-repositório>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd sorteador-numeros
   ```
3. Abra o arquivo `index.html` no navegador.

## Exemplo de Interface

### Entrada:
- De: 1
- Até: 100
- Quantidade: 5

### Resultado:
```
Números sorteados: 12, 45, 78, 3, 89
```
---

