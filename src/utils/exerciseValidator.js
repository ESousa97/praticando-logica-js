// src/utils/exerciseValidator.js
export class ExerciseValidator {
  static validateCode(userCode, expectedElements) {
    const normalizedCode = userCode.toLowerCase().replace(/\s+/g, ' ').trim()
    
    return expectedElements.every(element => {
      const normalizedElement = element.toLowerCase()
      return normalizedCode.includes(normalizedElement)
    })
  }

  static validateText(userAnswer, expectedAnswer) {
    const normalize = (str) => str.toLowerCase().trim().replace(/\s+/g, ' ')
    return normalize(userAnswer) === normalize(expectedAnswer)
  }

  static validateNumber(userAnswer, expectedAnswer, tolerance = 0.001) {
    const userNum = parseFloat(userAnswer)
    const expectedNum = parseFloat(expectedAnswer)
    
    if (isNaN(userNum) || isNaN(expectedNum)) {
      return false
    }
    
    return Math.abs(userNum - expectedNum) <= tolerance
  }

  static validateMultipleChoice(userAnswer, correctOption) {
    return userAnswer === correctOption
  }

  static validateFunction(userCode, testCases) {
    try {
      // Criar função a partir do código do usuário
      const func = new Function('return ' + userCode)()
      
      // Testar com os casos de teste
      return testCases.every(testCase => {
        const result = func(...testCase.input)
        return result === testCase.expected
      })
    } catch (error) {
      return false
    }
  }

  static validateRegex(userAnswer, pattern, flags = 'gi') {
    try {
      const regex = new RegExp(pattern, flags)
      return regex.test(userAnswer)
    } catch (error) {
      return false
    }
  }

  static generateFeedback(isCorrect, exerciseType, userAnswer, expectedAnswer) {
    if (isCorrect) {
      const successMessages = [
        '🎉 Perfeito! Você acertou!',
        '✨ Excelente trabalho!',
        '🚀 Parabéns! Resposta correta!',
        '👏 Muito bem! Continue assim!',
        '🎯 Acertou em cheio!'
      ]
      return successMessages[Math.floor(Math.random() * successMessages.length)]
    }

    const errorMessages = {
      code: [
        '🤔 Quase lá! Verifique a sintaxe do seu código.',
        '💡 Revise os elementos necessários no código.',
        '🔍 Algo está faltando no seu código.'
      ],
      text: [
        '📝 Resposta incorreta. Tente novamente!',
        '🎭 Verifique a ortografia e tente outra vez.',
        '💭 Pense um pouco mais sobre a resposta.'
      ],
      number: [
        '🔢 Valor incorreto. Confira seus cálculos!',
        '📊 Resultado não confere. Tente novamente!',
        '🧮 Verifique a matemática e tente outra vez.'
      ]
    }

    const messages = errorMessages[exerciseType] || errorMessages.text
    return messages[Math.floor(Math.random() * messages.length)]
  }
}
