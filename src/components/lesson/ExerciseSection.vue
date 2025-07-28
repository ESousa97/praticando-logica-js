<template>
  <div class="exercise-section">
    <h4>💡 Exercício</h4>
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
        {{ showHint ? "Ocultar" : "Ver" }} Dica 💡
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
  name: "ExerciseSection",
  props: {
    exercise: { type: Object, required: true },
  },
  data() {
    return {
      userAnswer: "",
      feedback: "",
      feedbackType: "",
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
      this.userAnswer = "";
      this.feedback = "";
      this.feedbackType = "";
      this.isCompleted = false;
      this.attempts = 0;
      this.showHint = false;
    },
    checkAnswer() {
      this.attempts++;
      if (this.validateAnswer()) {
        this.feedback = "Parabéns! Resposta correta! 🎉";
        this.feedbackType = "success";
        this.isCompleted = true;
        this.$emit("exercise-completed");
      } else {
        this.feedback = "Ops! Tente novamente. 🤔";
        this.feedbackType = "error";
      }
    },
    validateAnswer() {
      if (this.exercise.type === "code") {
        const code = this.userAnswer.toLowerCase();
        return this.exercise.answer.every((term) => code.includes(term.toLowerCase()));
      } else if (this.exercise.type === "text") {
        return this.userAnswer.toLowerCase().includes(this.exercise.answer.toLowerCase());
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

<style scoped>
.exercise-section {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: #fafafa;
  margin-bottom: 2rem;
}
.question {
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.code-input,
.text-input {
  width: 100%;
  padding: 0.75rem;
  font-family: monospace;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1rem;
  box-sizing: border-box;
}
.buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.btn {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
}
.btn-primary {
  background-color: #007bff;
  color: white;
}
.btn-primary:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
}
.hint-box {
  margin-top: 1rem;
  background: #fff3cd;
  border-radius: 6px;
  padding: 0.75rem;
  color: #856404;
  font-weight: 600;
}
.feedback {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 600;
}
.feedback.success {
  background-color: #d4edda;
  color: #155724;
}
.feedback.error {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
