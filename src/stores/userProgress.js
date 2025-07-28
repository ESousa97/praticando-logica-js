// src/stores/userProgress.js
import { defineStore } from 'pinia'

export const useUserProgressStore = defineStore('userProgress', {
  state: () => ({
    userPoints: parseInt(localStorage.getItem('userPoints')) || 0,
    userLevel: parseInt(localStorage.getItem('userLevel')) || 1,
    completedLessons: JSON.parse(localStorage.getItem('completedLessons')) || [],
    completedModules: JSON.parse(localStorage.getItem('completedModules')) || [],
    earnedBadges: JSON.parse(localStorage.getItem('earnedBadges')) || [],
    lastCompleted: localStorage.getItem('lastCompleted') || null,
    lastPoints: parseInt(localStorage.getItem('lastPoints')) || 0
  }),

  getters: {
    totalExercises: () => {
      // Calcular total de exercícios baseado nos módulos
      return 50 // placeholder
    },
    
    completedExercises: (state) => {
      return state.completedLessons.length
    },

    overallProgress: (state) => {
      const total = 50 // total de lições
      return (state.completedLessons.length / total) * 100
    },

    isLessonCompleted: (state) => {
      return (moduleId, lessonId) => {
        return state.completedLessons.includes(`${moduleId}-${lessonId}`)
      }
    },

    isModuleCompleted: (state) => {
      return (moduleId) => {
        return state.completedModules.includes(moduleId)
      }
    }
  },

  actions: {
    completeLesson(moduleId, lessonId, points = 10) {
      const lessonKey = `${moduleId}-${lessonId}`
      
      if (!this.completedLessons.includes(lessonKey)) {
        this.completedLessons.push(lessonKey)
        this.addPoints(points)
        this.lastCompleted = `Módulo ${moduleId} - Lição ${lessonId}`
        this.lastPoints = points
        
        this.saveToLocalStorage()
        this.checkForNewBadges()
      }
    },

    completeModule(moduleId) {
      if (!this.completedModules.includes(moduleId)) {
        this.completedModules.push(moduleId)
        this.addPoints(50) // Bônus por completar módulo
        this.saveToLocalStorage()
        this.checkForNewBadges()
      }
    },

    addPoints(points) {
      this.userPoints += points
      this.updateLevel()
    },

    updateLevel() {
      const newLevel = Math.floor(this.userPoints / 100) + 1
      if (newLevel > this.userLevel) {
        this.userLevel = newLevel
        this.earnBadge({
          id: `level-${newLevel}`,
          name: `Nível ${newLevel}`,
          icon: '🎯',
          description: `Alcançou o nível ${newLevel}!`
        })
      }
    },

    earnBadge(badge) {
      if (!this.earnedBadges.find(b => b.id === badge.id)) {
        this.earnedBadges.push(badge)
        this.saveToLocalStorage()
      }
    },

    checkForNewBadges() {
      // Verificar conquistas baseadas no progresso
      const badges = [
        {
          id: 'first-lesson',
          name: 'Primeiro Passo',
          icon: '🚀',
          condition: () => this.completedLessons.length >= 1
        },
        {
          id: 'dedicated-learner',
          name: 'Estudante Dedicado',
          icon: '📚',
          condition: () => this.completedLessons.length >= 10
        },
        {
          id: 'javascript-master',
          name: 'Mestre JavaScript',
          icon: '👑',
          condition: () => this.completedModules.length >= 5
        }
      ]

      badges.forEach(badge => {
        if (badge.condition() && !this.earnedBadges.find(b => b.id === badge.id)) {
          this.earnBadge(badge)
        }
      })
    },

    saveToLocalStorage() {
      localStorage.setItem('userPoints', this.userPoints.toString())
      localStorage.setItem('userLevel', this.userLevel.toString())
      localStorage.setItem('completedLessons', JSON.stringify(this.completedLessons))
      localStorage.setItem('completedModules', JSON.stringify(this.completedModules))
      localStorage.setItem('earnedBadges', JSON.stringify(this.earnedBadges))
      localStorage.setItem('lastCompleted', this.lastCompleted)
      localStorage.setItem('lastPoints', this.lastPoints.toString())
    },

    resetProgress() {
      this.userPoints = 0
      this.userLevel = 1
      this.completedLessons = []
      this.completedModules = []
      this.earnedBadges = []
      this.lastCompleted = null
      this.lastPoints = 0
      
      localStorage.clear()
    }
  }
})
