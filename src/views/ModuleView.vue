// src/views/ModuleView.vue
<template>
  <div class="module-view">
    <div class="module-header">
      <button class="btn-back" @click="goHome">
        ← Voltar aos Módulos
      </button>
      
      <div v-if="module" class="module-info">
        <h1>{{ module.icon }} {{ module.title }}</h1>
        <p>{{ module.description }}</p>
        <div class="module-meta">
          <span class="difficulty">{{ module.difficulty }}</span>
          <span class="duration">{{ module.estimatedTime }}</span>
        </div>
      </div>
    </div>

    <div v-if="module" class="lessons-list">
      <h2>📚 Lições</h2>
      
      <div class="lessons-grid">
        <div 
          v-for="(lesson, index) in module.lessons"
          :key="lesson.id"
          class="lesson-card"
          :class="{
            completed: isLessonCompleted(lesson.id),
            current: currentLessonIndex === index,
            locked: isLessonLocked(index)
          }"
          @click="!isLessonLocked(index) && goToLesson(lesson.id)"
        >
          <div class="lesson-number">{{ index + 1 }}</div>
          <div class="lesson-content">
            <h3>{{ lesson.title }}</h3>
            <p>{{ lesson.subtitle }}</p>
          </div>
          <div class="lesson-status">
            <span v-if="isLessonCompleted(lesson.id)" class="status-icon completed">✅</span>
            <span v-else-if="currentLessonIndex === index" class="status-icon current">▶️</span>
            <span v-else-if="isLessonLocked(index)" class="status-icon locked">🔒</span>
            <span v-else class="status-icon available">⭕</span>
          </div>
        </div>
      </div>

      <div class="module-progress-section">
        <h3>📊 Progresso do Módulo</h3>
        <div class="progress-info">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${moduleProgress}%` }">
              {{ Math.round(moduleProgress) }}%
            </div>
          </div>
          <p>{{ completedLessons }} de {{ module.lessons.length }} lições completadas</p>
        </div>
      </div>
    </div>

    <div v-else class="error-state">
      <h2>Módulo não encontrado</h2>
      <button class="btn btn-primary" @click="goHome">
        Voltar aos Módulos
      </button>
    </div>
  </div>
</template>

<script>
import { useUserProgressStore } from '../stores/userProgress'
import { useModulesStore } from '../stores/modules'

export default {
  name: 'ModuleView',

  props: {
    moduleId: {
      type: String,
      required: true
    }
  },

  setup() {
    const userProgress = useUserProgressStore()
    const modulesStore = useModulesStore()
    
    return {
      userProgress,
      modulesStore
    }
  },

  computed: {
    module() {
      return this.modulesStore.getModuleById(this.moduleId)
    },

    completedLessons() {
      if (!this.module) return 0
      return this.module.lessons.filter(lesson => 
        this.isLessonCompleted(lesson.id)
      ).length
    },

    moduleProgress() {
      if (!this.module || this.module.lessons.length === 0) return 0
      return (this.completedLessons / this.module.lessons.length) * 100
    },

    currentLessonIndex() {
      if (!this.module) return -1
      // Encontrar a primeira lição não completada
      const firstIncomplete = this.module.lessons.findIndex(lesson => 
        !this.isLessonCompleted(lesson.id)
      )
      return firstIncomplete !== -1 ? firstIncomplete : this.module.lessons.length - 1
    }
  },

  methods: {
    isLessonCompleted(lessonId) {
      return this.userProgress.isLessonCompleted(this.moduleId, lessonId)
    },

    isLessonLocked(lessonIndex) {
      // Primeira lição sempre desbloqueada
      if (lessonIndex === 0) return false
      
      // Outras lições só desbloqueiam se a anterior foi completada
      const previousLesson = this.module.lessons[lessonIndex - 1]
      return !this.isLessonCompleted(previousLesson.id)
    },

    goToLesson(lessonId) {
      this.$router.push({
        name: 'Lesson',
        params: {
          moduleId: this.moduleId,
          lessonId: lessonId
        }
      })
    },

    goHome() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
.module-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.module-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.module-info h1 {
  margin-bottom: 0.5rem;
}

.module-info p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.module-meta {
  display: flex;
  gap: 1rem;
}

.difficulty {
  background: var(--bg-light);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
}

.duration {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.lessons-list h2 {
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.lessons-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.lesson-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border: 2px solid #e9ecef;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
}

.lesson-card:hover:not(.locked) {
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.lesson-card.completed {
  border-color: var(--success-color);
  background: linear-gradient(135deg, #f8fff9, #e8f5e8);
}

.lesson-card.current {
  border-color: var(--primary-color);
  background: linear-gradient(135deg, #f0f4ff, #e3f2fd);
}

.lesson-card.locked {
  opacity: 0.6;
  cursor: not-allowed;
  background: #f8f9fa;
}

.lesson-number {
  width: 40px;
  height: 40px;
  background: var(--primary-gradient);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.lesson-card.completed .lesson-number {
  background: var(--success-gradient);
}

.lesson-card.locked .lesson-number {
  background: #6c757d;
}

.lesson-content {
  flex: 1;
}

.lesson-content h3 {
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.lesson-content p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.status-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.module-progress-section {
  background: var(--bg-light);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  text-align: center;
}

.module-progress-section h3 {
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.progress-info p {
  margin-top: 0.5rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .module-view {
    padding: 1rem;
  }
  
  .module-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .lesson-card {
    padding: 1rem;
  }
  
  .lesson-number {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style>
