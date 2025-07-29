import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProgressStore = defineStore('progress', () => {
  const completedLessons = ref(JSON.parse(localStorage.getItem('completedLessons') || '{}'))
  const completedModules = ref(JSON.parse(localStorage.getItem('completedModules') || '[]'))

  const completeLesson = (moduleId, lessonId) => {
    if (!completedLessons.value[moduleId]) {
      completedLessons.value[moduleId] = []
    }
    if (!completedLessons.value[moduleId].includes(lessonId)) {
      completedLessons.value[moduleId].push(lessonId)
      localStorage.setItem('completedLessons', JSON.stringify(completedLessons.value))
    }
  }

  const completeModule = (moduleId) => {
    if (!completedModules.value.includes(moduleId)) {
      completedModules.value.push(moduleId)
      localStorage.setItem('completedModules', JSON.stringify(completedModules.value))
    }
  }

  const isLessonCompleted = computed(() => (moduleId, lessonId) => 
    completedLessons.value[moduleId]?.includes(lessonId) || false
  )

  const isModuleCompleted = computed(() => (moduleId) => 
    completedModules.value.includes(moduleId)
  )

  return {
    completedLessons,
    completedModules,
    completeLesson,
    completeModule,
    isLessonCompleted,
    isModuleCompleted
  }
})
