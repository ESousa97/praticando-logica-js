<template>
  <div class="exercise-section">
    <h4>Exercício</h4>
    <p class="question">{{ exercise.question }}</p>

    <textarea
      v-if="exercise.type === 'code'"
      v-model="userAnswer"
      :placeholder="exercise.placeholder"
      rows="6"
      class="code-input"
    ></textarea>

    <input
      v-else
      v-model="userAnswer"
      :placeholder="exercise.placeholder"
      :type="exercise.type || 'text'"
      class="text-input"
    />

    <div class="buttons">
      <button @click="checkAnswer" :disabled="isCompleted" class="btn btn-primary">
        Verificar Resposta
      </button>
      <button
        v-if="showHintButton"
        @click="toggleHint"
        :disabled="isCompleted"
        class="btn btn-secondary"
      >
        {{ showHint ? "Ocultar" : "Ver" }} Dica
      </button>
    </div>

    <div v-if="showHint" class="hint-box">
      <strong>Dica:</strong> {{ exercise.hint }}
    </div>

    <div v-if="feedback" :class="['feedback', feedbackType]">{{ feedback }}</div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseSection',
  props: {
    exercise: { type: Object, required: true },
  },
  data() {
    return {
      userAnswer: '',
      feedback: '',
      feedbackType: '',
      isCompleted: false,
      attempts: 0,
      showHint: false,
    };
  },
  computed: {
    showHintButton() {
      return this.attempts >= 2 && this.exercise.hint && !this.isCompleted;
    },
  },
  watch: {
    exercise: {
      immediate: true,
      handler() {
        this.resetExercise();
      },
    },
  },
  methods: {
    resetExercise() {
      this.userAnswer = '';
      this.feedback = '';
      this.feedbackType = '';
      this.isCompleted = false;
      this.attempts = 0;
      this.showHint = false;
    },
    checkAnswer() {
      this.attempts++;
      if (this.validateAnswer()) {
        this.feedback = 'Parabéns! Resposta correta!';
        this.feedbackType = 'success';
        this.isCompleted = true;
        this.$emit('exercise-completed');
      } else {
        this.feedback = 'Ops! Tente novamente.';
        this.feedbackType = 'error';
      }
    },
    validateAnswer() {
      if (this.exercise.type === 'code') {
        const code = this.userAnswer.toLowerCase();
        return this.exercise.answer.every(term =>
          code.includes(term.toLowerCase())
        );
      } else if (this.exercise.type === 'text') {
        return this.userAnswer
          .toLowerCase()
          .includes(this.exercise.answer.toLowerCase());
      } else {
        return this.userAnswer.toLowerCase() === this.exercise.answer.toLowerCase();
      }
    },
    toggleHint() {
      this.showHint = !this.showHint;
    },
  },
};
</script>
