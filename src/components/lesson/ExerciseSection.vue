// src/components/lesson/ExerciseSection.vue
<template>
  <div class="exercise-section">
    <div class="exercise-header">
      <h3>💡 Hora de Praticar!</h3>
      <p>{{ exercise.question }}</p>
    </div>

    <div class="exercise-input-area">
      <textarea 
        v-if="exercise.type === 'code'"
        v-model="userAnswer"
        class="exercise-input code-input"
        :placeholder="exercise.placeholder"
        rows="6"
      ></textarea>
      
      <input 
        v-else
        v-model="userAnswer"
        class="exercise-input"
        :type="exercise.type || 'text'"
        :placeholder="exercise.placeholder"
      >
    </div>

    <div class="exercise-actions">
      <button class="btn btn-primary" @click="checkAnswer">
        Verificar Resposta
      </button>
      
      <button 
        v-if="showHintButton" 
        class="btn btn-secondary" 
        @click="toggleHint"
      >
        💡 {{ showHint ? 'Ocultar' : 'Ver' }} Dica
      </button>
    </div>

    <HintBox 
      v-if="showHint && exercise.hint" 
      :hint="exercise.hint" 
    />

    <FeedbackMessage 
      v-if="feedback" 
      :message="feedback" 
      :type="feedbackType" 
    />

    <div v-if="isCompleted" class="completion-actions">
      <button class="btn btn-success" @click="nextStep">
        Continuar →
      </button>
    </div>
  </div>
</template>

<script>
import HintBox from '../HintBox.vue'
import FeedbackMessage from '../FeedbackMessage.vue'

export default {
  name: 'ExerciseSection',
  components: {
    HintBox,
    FeedbackMessage
  },

  props: {
    exercise: {
      type: Object,
      required: true
    }
  },

  emits: ['exercise-completed'],

  data() {
    return {
      userAnswer: '',
      feedback: '',
      feedbackType: '',
      showHint: false,
      isCompleted: false,
      attempts: 0
    }
  },

  computed: {
    showHintButton() {
      return this.attempts >= 2 && this.exercise.hint
    }
  },

  methods: {
    checkAnswer() {
      this.attempts++
      
      const isCorrect = this.validateAnswer()
      
      if (isCorrect) {
        this.feedback = 'Parabéns! Resposta correta! 🎉'
        this.feedbackType = 'success'
        this.isCompleted = true
        this.$emit('exercise-completed')
      } else {
        this.feedback = 'Ops! Tente novamente. 🤔'
        this.feedbackType = 'error'
      }
    },

    validateAnswer() {
      const { answer, type } = this.exercise
      
      if (type === 'code') {
        return this.validateCodeAnswer(answer)
      }
      
      return this.userAnswer.toLowerCase().trim() === answer.toLowerCase()
    },

    validateCodeAnswer(expectedElements) {
      const userCode = this.userAnswer.toLowerCase()
      return expectedElements.every(element => 
        userCode.includes(element.toLowerCase())
      )
    },

    toggleHint() {
      this.showHint = !this.showHint
    },

    nextStep() {
      // Lógica para próximo passo
    }
  }
}
</script>
