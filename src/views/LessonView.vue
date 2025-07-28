// src/views/LessonView.vue
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
    }
  },

  methods: {
    onDemoCompleted() {
      // Lógica quando demo é completada
    },

    onExerciseCompleted() {
      this.userProgress.completeLesson(this.moduleId, this.lessonId)
      
      // Mostrar celebração ou ir para próxima lição
      this.showCompletionFeedback()
    },

    showCompletionFeedback() {
      // Implementar feedback visual
    },

    goBack() {
      this.$router.push({ name: 'Module', params: { moduleId: this.moduleId } })
    }
  }
}
</script>
