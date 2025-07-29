<template>
  <div class="practice-area">
    <!-- Tela inicial: lista de módulos -->
    <ModulesGrid
      v-if="!selectedModule"
      :modules="modules"
      :completed-modules="completedModules"
      @module-select="selectModule"
    />

    <!-- Tela do módulo selecionado -->
    <div v-else>
      <button class="btn-back" @click="selectedModule = null" aria-label="Voltar para seleção de módulos">
        <ArrowLeftIcon class="icon-back" /> Voltar
      </button>

      <h2 class="module-title">{{ selectedModule.title }}</h2>
      <p class="module-description">{{ selectedModule.description }}</p>

      <div class="lessons-list" role="list">
        <div
          v-for="lesson in selectedModule.lessons"
          :key="lesson.id"
          :class="[
            'lesson-card',
            {
              completed: completedLessons.includes(lesson.id),
              active: selectedLesson && selectedLesson.id === lesson.id,
            },
          ]"
          @click="selectLesson(lesson)"
          role="listitem"
          tabindex="0"
          @keydown.enter.prevent="selectLesson(lesson)"
          :aria-current="selectedLesson && selectedLesson.id === lesson.id ? 'step' : false"
          :aria-disabled="completedLessons.includes(lesson.id) ? 'false' : 'true'"
        >
          <h3>{{ lesson.title }}</h3>
          <span class="status" aria-label="Status da aula">
            <CheckCircleIcon
              v-if="completedLessons.includes(lesson.id)"
              class="icon-completed"
              aria-hidden="true"
              title="Aula completada"
            />
            <LockIcon
              v-else
              class="icon-locked"
              aria-hidden="true"
              title="Aula bloqueada"
            />
          </span>
        </div>
      </div>

      <!-- Detalhes e exercício da aula -->
      <div v-if="selectedLesson" class="lesson-detail">
        <h3 class="lesson-title">{{ selectedLesson.title }}</h3>
        <p class="lesson-theory">{{ selectedLesson.theory }}</p>

        <ExerciseSection
          :exercise="selectedLesson.exercise"
          @exercise-completed="onExerciseCompleted"
        />

        <div class="lesson-buttons">
          <button
            v-if="showNextLessonButton"
            class="btn btn-next"
            @click="goToNextLesson"
            aria-label="Próxima aula"
          >
            Próxima Aula <ArrowRightIcon class="icon-next" />
          </button>
          <button
            class="btn btn-close"
            @click="closeLesson"
            aria-label="Fechar aula"
          >
            Fechar Aula <XIcon class="icon-close" />
          </button>
        </div>
      </div>

      <div class="progress">
        <strong>Progresso:</strong> {{ completedLessons.length }}/{{ selectedModule.lessons.length }}
      </div>

      <div v-if="allLessonsComplete" class="badge-section" role="alert" aria-live="polite">
        <div class="badge-earned">
          <AwardIcon class="icon-award" /> Parabéns! Você completou este módulo!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LockIcon,
  XIcon,
  AwardIcon,
} from "lucide-vue-next";

import { modules } from "../data/modules.js";
import ModulesGrid from "./ModulesGrid.vue";
import ExerciseSection from "./lesson/ExerciseSection.vue";

export default {
  name: "PracticeArea",
  components: {
    ModulesGrid,
    ExerciseSection,
    ArrowLeftIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    LockIcon,
    XIcon,
    AwardIcon,
  },
  data() {
    return {
      modules,
      selectedModule: null,
      selectedLesson: null,
      completedLessons: [],
      completedModules: JSON.parse(localStorage.getItem("completedModules")) || [],
    };
  },
  computed: {
    showNextLessonButton() {
      if (!this.selectedLesson || !this.selectedModule) return false;
      const idx = this.selectedModule.lessons.findIndex(
        (l) => l.id === this.selectedLesson.id
      );
      return (
        idx < this.selectedModule.lessons.length - 1 &&
        this.completedLessons.includes(this.selectedLesson.id)
      );
    },
    allLessonsComplete() {
      return (
        this.selectedModule &&
        this.completedLessons.length === this.selectedModule.lessons.length
      );
    },
  },
  methods: {
    selectModule(moduleId) {
      this.selectedModule = this.modules.find((m) => m.id === moduleId);
      const key = "completedLessons_" + this.selectedModule.id;
      this.completedLessons = JSON.parse(localStorage.getItem(key)) || [];
      this.selectedLesson = null;
    },
    selectLesson(lesson) {
      this.selectedLesson = lesson;
    },
    onExerciseCompleted() {
      if (!this.completedLessons.includes(this.selectedLesson.id)) {
        this.completedLessons.push(this.selectedLesson.id);
        const key = "completedLessons_" + this.selectedModule.id;
        localStorage.setItem(key, JSON.stringify(this.completedLessons));
        if (this.allLessonsComplete) {
          if (!this.completedModules.includes(this.selectedModule.id)) {
            this.completedModules.push(this.selectedModule.id);
            localStorage.setItem("completedModules", JSON.stringify(this.completedModules));
          }
        }
      }
    },
    goToNextLesson() {
      const idx = this.selectedModule.lessons.findIndex(
        (l) => l.id === this.selectedLesson.id
      );
      const nextLesson = this.selectedModule.lessons[idx + 1];
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
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  padding: 1.5rem;
}
.btn-back {
  background: none;
  border: none;
  color: #007bff;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.3s ease;
}
.btn-back:hover,
.btn-back:focus-visible {
  color: #0056b3;
  outline: none;
}
.module-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: #34495e;
}
.module-description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.8rem;
  font-weight: 500;
}
.lessons-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 2rem;
}
.lesson-card {
  border: 2px solid #eee;
  border-radius: 16px;
  padding: 1rem 1.2rem;
  min-width: 210px;
  flex: 1 1 220px;
  background: #f9fbff;
  cursor: pointer;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  position: relative;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lesson-card:hover,
.lesson-card:focus-visible {
  border-color: #007bff;
  box-shadow: 0 8px 16px rgba(0,123,255,0.15);
  outline: none;
}
.lesson-card.active {
  background: #e7f1ff;
  border-color: #007bff;
  box-shadow: 0 10px 22px rgba(0,123,255,0.3);
}
.lesson-card.completed {
  border-color: #4caf50;
  background: #e7f9ee;
  cursor: default;
  color: #2d6a31;
  font-weight: 600;
}
.status {
  display: flex;
  align-items: center;
  font-size: 1.3rem;
}
.icon-completed {
  color: #4caf50;
  width: 22px;
  height: 22px;
}
.icon-locked {
  color: #bbb;
  width: 22px;
  height: 22px;
}
.lesson-detail {
  border-top: 2px solid #ccc;
  padding-top: 1.5rem;
  margin-bottom: 2rem;
}
.lesson-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #34495e;
}
.lesson-theory {
  font-size: 1rem;
  line-height: 1.5;
  color: #444;
  margin-bottom: 1.8rem;
}
.lesson-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.btn-next,
.btn-close {
  padding: 0.65rem 1.8rem;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
  transition: background-color 0.3s ease;
}
.btn-next {
  background-color: #007bff;
  color: white;
}
.btn-next:hover,
.btn-next:focus-visible {
  background-color: #0056b3;
  outline: none;
}
.btn-close {
  background-color: #777;
  color: white;
}
.btn-close:hover,
.btn-close:focus-visible {
  background-color: #444;
  outline: none;
}
.progress {
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
}
.badge-section {
  text-align: center;
  font-weight: 700;
  color: #2c3e50;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1rem;
}
.icon-award {
  width: 26px;
  height: 26px;
  color: #f1c40f;
  filter: drop-shadow(0 0 2px rgba(241,196,15,0.7));
  user-select: none;
}
</style>
