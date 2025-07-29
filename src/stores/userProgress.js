import { defineStore } from 'pinia';

export const useUserProgressStore = defineStore('userProgress', {
  state: () => ({
    completedModules: JSON.parse(localStorage.getItem('completedModules')) || [],
    completedLessons: JSON.parse(localStorage.getItem('completedLessons')) || {},
  }),

  getters: {
    isModuleCompleted: (state) => (moduleId) =>
      state.completedModules.includes(moduleId),

    isLessonCompleted: (state) => (moduleId, lessonId) =>
      state.completedLessons[moduleId]?.includes(lessonId) || false,
  },

  actions: {
    completeLesson(moduleId, lessonId) {
      if (!this.completedLessons[moduleId]) {
        this.completedLessons[moduleId] = [];
      }
      if (!this.completedLessons[moduleId].includes(lessonId)) {
        this.completedLessons[moduleId].push(lessonId);
        localStorage.setItem('completedLessons', JSON.stringify(this.completedLessons));
      }
      this.checkModuleCompletion(moduleId);
    },

    checkModuleCompletion(moduleId) {
      // Import dynamic modules data or inject modules as needed
      import('../data/modules.js').then(({ modules }) => {
        const module = modules.find((m) => m.id === moduleId);
        if (!module) return;

        const allLessonsDone = module.lessons.every((lesson) =>
          this.completedLessons[moduleId]?.includes(lesson.id)
        );
        if (allLessonsDone && !this.completedModules.includes(moduleId)) {
          this.completedModules.push(moduleId);
          localStorage.setItem('completedModules', JSON.stringify(this.completedModules));
        }
      });
    },

    resetProgress() {
      this.completedModules = [];
      this.completedLessons = {};
      localStorage.removeItem('completedModules');
      localStorage.removeItem('completedLessons');
    }
  }
});
