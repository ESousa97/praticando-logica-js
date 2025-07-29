<template>
  <section class="lesson-view" v-if="lesson">
    <header class="lesson-header">
      <button @click="goBack" class="btn btn-outline">&larr; Voltar</button>
      <h1>{{ lesson.title }}</h1>
      <p>{{ lesson.subtitle || '' }}</p>
    </header>

    <article class="lesson-content">
      <section class="theory-section" v-html="lesson.theory"></section>

      <pre class="code-example"><code>{{ lesson.codeExample }}</code></pre>

      <ExerciseSection
        :exercise="lesson.exercise"
        @exercise-completed="onExerciseCompleted"
      />
    </article>
  </section>

  <section v-else class="error-state">
    <h2>Lição não encontrada</h2>
    <router-link to="/modules" class="btn btn-primary">Voltar para Módulos</router-link>
  </section>
</template>

<script>
import ExerciseSection from '../components/lesson/ExerciseSection.vue'
import { modules } from '../data/modules.js'

export default {
  name: "LessonView",
  components: { ExerciseSection },

  props: {
    moduleId: { type: String, required: true },
    lessonId: { type: String, required: true }
  },

  data() {
    return {
      lesson: null
    }
  },

  created() {
    const mod = modules.find(m => m.id === this.moduleId)
    if (mod) {
      this.lesson = mod.lessons.find(l => l.id === this.lessonId) || null
    }
  },

  methods: {
    onExerciseCompleted() {
      // Aqui você pode salvar progresso, mostrar feedback, etc.
      alert('Parabéns por completar o exercício!')
    },
    goBack() {
      this.$router.push({ name: 'Modules' })
    }
  }
}
</script>

<style scoped>
.lesson-view {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.lesson-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.lesson-header h1 {
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
}

.lesson-header p {
  font-size: 1rem;
  color: #555;
}

.lesson-content {
  line-height: 1.5;
}

.theory-section {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
  background: #f9fafb;
  padding: 1rem;
  border-left: 5px solid #667eea;
  border-radius: 6px;
  white-space: pre-line;
}

.code-example {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  overflow-x: auto;
  margin-bottom: 2rem;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.btn-outline {
  background: none;
  border: 2px solid #667eea;
  color: #667eea;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-outline:hover {
  background-color: #667eea;
  color: white;
}

.error-state {
  text-align: center;
  margin-top: 5rem;
  color: #555;
}
</style>
