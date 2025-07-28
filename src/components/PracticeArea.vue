<template>
  <div class="practice-area">
    <h2>💻 {{ module.title }}</h2>
    <p>Escolha uma aula para começar a praticar:</p>

    <div class="lessons-list">
      <div
        v-for="lesson in module.lessons"
        :key="lesson.id"
        :class="['lesson-card', { active: selectedLesson && selectedLesson.id === lesson.id }]"
        @click="selectLesson(lesson)"
      >
        <h3>{{ lesson.title }}</h3>
        <p>{{ lesson.theory }}</p>
        <span class="status" :class="{ completed: completedLessons.includes(lesson.id) }">
          {{ completedLessons.includes(lesson.id) ? "✅ Completada" : "🔒" }}
        </span>
      </div>
    </div>

    <div v-if="selectedLesson" class="lesson-detail">
      <h3>{{ selectedLesson.title }}</h3>
      <p class="theory-text" v-html="selectedLesson.theory"></p>

      <ExerciseSection
        :exercise="selectedLesson.exercise"
        @exercise-completed="onExerciseCompleted"
      />

      <button
        v-if="showNextLessonButton"
        class="btn btn-primary next-lesson-btn"
        @click="goToNextLesson"
      >
        Próxima Aula →
      </button>

      <button class="btn btn-outline close-lesson-btn" @click="closeLesson">
        Fechar Aula
      </button>
    </div>

    <div class="progress">
      Aulas completadas: {{ completedLessons.length }} / {{ module.lessons.length }}
    </div>
  </div>
</template>

<script>
import { module } from "../data/module.js";
import ExerciseSection from "./lesson/ExerciseSection.vue";

export default {
  name: "PracticeArea",
  components: { ExerciseSection },
  data() {
    return {
      module,
      selectedLesson: null,
      completedLessons: JSON.parse(localStorage.getItem("completedLessons")) || [],
    };
  },
  computed: {
    showNextLessonButton() {
      if (!this.selectedLesson) return false;
      const currentIndex = this.module.lessons.findIndex(
        (l) => l.id === this.selectedLesson.id
      );
      return currentIndex < this.module.lessons.length - 1 && this.completedLessons.includes(this.selectedLesson.id);
    },
  },
  methods: {
    selectLesson(lesson) {
      this.selectedLesson = lesson;
    },
    onExerciseCompleted() {
      if (!this.completedLessons.includes(this.selectedLesson.id)) {
        this.completedLessons.push(this.selectedLesson.id);
        localStorage.setItem(
          "completedLessons",
          JSON.stringify(this.completedLessons)
        );
      }
    },
    goToNextLesson() {
      const currentIndex = this.module.lessons.findIndex(
        (l) => l.id === this.selectedLesson.id
      );
      const nextLesson = this.module.lessons[currentIndex + 1];
      if (nextLesson) {
        this.selectedLesson = nextLesson;
      }
    },
    closeLesson() {
      this.selectedLesson = null;
    },
  },
};
</script>

<style scoped>
.practice-area {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}
.lessons-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.lesson-card {
  flex: 1 1 45%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
}
.lesson-card:hover {
  background-color: #f0f8ff;
}
.lesson-card.active {
  border-color: #007bff;
  background-color: #e7f1ff;
}
.status {
  position: absolute;
  top: 8px;
  right: 12px;
  font-weight: bold;
}
.status.completed {
  color: green;
}
.lesson-detail {
  border-top: 2px solid #007bff;
  padding-top: 1rem;
}
.theory-text {
  margin-bottom: 1rem;
}
.next-lesson-btn {
  margin-right: 1rem;
}
.close-lesson-btn {
  margin-top: 1rem;
}
.progress {
  margin-top: 2rem;
  font-weight: 600;
  text-align: center;
  color: #555;
}
.btn-outline {
  background: none;
  border: 1px solid #007bff;
  color: #007bff;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  margin-top: 1rem;
}
</style>
