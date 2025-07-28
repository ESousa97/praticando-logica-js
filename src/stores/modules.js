// src/stores/modules.js
import { defineStore } from 'pinia'
import modulesData from '../data/modules.json'

export const useModulesStore = defineStore('modules', {
  state: () => ({
    modules: modulesData
  }),

  getters: {
    getModuleById: (state) => {
      return (id) => state.modules.find(module => module.id === id)
    },

    getLessonById: (state) => {
      return (moduleId, lessonId) => {
        const module = state.modules.find(m => m.id === moduleId)
        return module?.lessons.find(lesson => lesson.id === lessonId)
      }
    },

    getUnlockedModules: () => (completedModules) => {
      // Lógica para determinar quais módulos estão desbloqueados
      return modulesData.filter((module, index) => {
        if (index === 0) return true // Primeiro módulo sempre desbloqueado
        return completedModules.includes(modulesData[index - 1].id)
      })
    }
  }
})
