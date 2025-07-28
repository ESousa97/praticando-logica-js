<!-- src/views/LessonView.vue -->
<template>
  <div class="lesson-view">
    <div class="lesson-header">
      <button class="btn-back" @click="goBack">
        ← Voltar
      </button>
      <div class="lesson-info">
        <h1>{{ lesson?.title }}</h1>
        <p>{{ lesson?.subtitle }}</p>
      </div>
    </div>

    <div class="lesson-content" v-if="lesson">
      <TheorySection 
        :theory="lesson.theory" 
        :code-example="lesson.codeExample" 
      />
      
      <InteractiveDemo 
        v-if="lesson.demo"
        :demo-component="lesson.demo"
        @completed="onDemoCompleted"
      />
      
      <ExerciseSection 
        :exercise="lesson.exercise"
        @exercise-completed="onExerciseCompleted"
        @next-step="goToNextLesson"
        ref="exerciseSection"
      />
    </div>

    <div v-else class="error-state">
      <h2>Lição não encontrada</h2>
      <button class="btn btn-primary" @click="goBack">
        Voltar aos Módulos
      </button>
    </div>
  </div>
</template>

<script>
import { useUserProgressStore } from '../stores/userProgress'
import { useModulesStore } from '../stores/modules'
import TheorySection from '../components/lesson/TheorySection.vue'
import InteractiveDemo from '../components/lesson/InteractiveDemo.vue'
import ExerciseSection from '../components/lesson/ExerciseSection.vue'

export default {
  name: 'LessonView',
  components: {
    TheorySection,
    InteractiveDemo,
    ExerciseSection
  },

  props: {
    moduleId: {
      type: String,
      required: true
    },
    lessonId: {
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
    lesson() {
      return this.modulesStore.getLessonById(this.moduleId, this.lessonId)
    },

    moduleLessons() {
      const module = this.modulesStore.getModuleById(this.moduleId)
      return module ? module.lessons : []
    },

    currentLessonIndex() {
      return this.moduleLessons.findIndex(lesson => lesson.id === this.lessonId)
    }
  },

  methods: {
    onDemoCompleted() {
      // Futuro: ações ao completar demo interativa
    },

    onExerciseCompleted() {
      this.userProgress.completeLesson(this.moduleId, this.lessonId)
      // Você pode colocar feedback visual aqui
    },

    goToNextLesson() {
      const nextIndex = this.currentLessonIndex + 1
      if (nextIndex < this.moduleLessons.length) {
        const nextLessonId = this.moduleLessons[nextIndex].id
        this.$router.push({ 
          name: 'Lesson', 
          params: { moduleId: this.moduleId, lessonId: nextLessonId }
        })
      } else {
        this.$router.push({ name: 'Module', params: { moduleId: this.moduleId } })
      }
    },

    goBack() {
      this.$router.push({ name: 'Module', params: { moduleId: this.moduleId } })
    }
  }
}
</script>

<style scoped>
.lesson-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.lesson-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.lesson-info h1 {
  margin-bottom: 0.5rem;
}

.lesson-info p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.btn-back {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--primary-color);
  padding: 0;
}

.error-state {
  text-align: center;
  margin-top: 4rem;
}

.error-state h2 {
  margin-bottom: 1rem;
}
</style>
