// src/utils/localStorageManager.js
export class LocalStorageManager {
  static setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn('Erro ao salvar no localStorage:', error)
    }
  }

  static getItem(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.warn('Erro ao ler do localStorage:', error)
      return defaultValue
    }
  }

  static removeItem(key) {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.warn('Erro ao remover do localStorage:', error)
    }
  }

  static clear() {
    try {
      localStorage.clear()
    } catch (error) {
      console.warn('Erro ao limpar localStorage:', error)
    }
  }

  static getStorageSize() {
    let total = 0
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length + key.length
      }
    }
    return total
  }

  // Métodos específicos para a aplicação
  static saveUserProgress(progress) {
    this.setItem('academia_js_progress', progress)
  }

  static getUserProgress() {
    return this.getItem('academia_js_progress', {
      userPoints: 0,
      userLevel: 1,
      completedLessons: [],
      completedModules: [],
      earnedBadges: [],
      lastCompleted: null,
      lastPoints: 0
    })
  }

  static savePracticeHistory(history) {
    this.setItem('academia_js_practice_history', history)
  }

  static getPracticeHistory() {
    return this.getItem('academia_js_practice_history', [])
  }

  static saveSessionData(sessionData) {
    this.setItem('academia_js_session', sessionData)
  }

  static getSessionData() {
    return this.getItem('academia_js_session', {
      startTime: new Date().toISOString(),
      timeSpent: 0,
      exercisesAttempted: 0,
      exercisesCompleted: 0
    })
  }
}
