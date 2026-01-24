<template>
  <div class="mx-auto max-w-6xl p-6">
    <!-- Grid de Módulos -->
    <div v-if="!selectedModule" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="module in modules"
        :key="module.id"
        @click="selectModule(module.id)"
        :class="[
          'relative transform cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl',
          progressStore.isModuleCompleted(module.id)
            ? 'border-green-400 bg-green-50'
            : 'border-gray-200 bg-white hover:border-primary-300',
        ]"
      >
        <div
          :class="['absolute inset-0 rounded-2xl bg-gradient-to-br opacity-10', module.color]"
        ></div>

        <div class="relative z-10">
          <h3 class="mb-2 text-xl font-bold text-gray-800">{{ module.title }}</h3>
          <p class="mb-4 text-gray-600">{{ module.description }}</p>

          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">
              {{ progressStore.completedLessons[module.id]?.length || 0 }}/{{
                module.lessons.length
              }}
              lições
            </span>
            <CheckCircle
              v-if="progressStore.isModuleCompleted(module.id)"
              class="h-6 w-6 text-green-500"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Módulo Selecionado -->
    <div v-else class="space-y-8">
      <div class="mb-6 flex items-center gap-4">
        <button
          @click="selectedModule = null"
          class="flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft class="h-5 w-5" />
          Voltar
        </button>
      </div>

      <div class="mb-8 text-center">
        <h2 class="mb-2 text-3xl font-bold text-gray-800">{{ selectedModule.title }}</h2>
        <p class="text-xl text-gray-600">{{ selectedModule.description }}</p>
        <div class="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            :class="['h-full bg-gradient-to-r transition-all duration-500', selectedModule.color]"
            :style="{
              width: `${(moduleLessonsCompleted.length / selectedModule.lessons.length) * 100}%`,
            }"
          ></div>
        </div>
        <p class="mt-2 text-sm text-gray-600">
          Progresso: {{ moduleLessonsCompleted.length }}/{{ selectedModule.lessons.length }} lições
        </p>
      </div>

      <!-- Lista de Lições -->
      <div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div
          v-for="lesson in selectedModule.lessons"
          :key="lesson.id"
          @click="selectLesson(lesson)"
          :class="[
            'flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all duration-300',
            selectedLesson?.id === lesson.id
              ? 'border-primary-500 bg-primary-50'
              : progressStore.isLessonCompleted(selectedModule.id, lesson.id)
                ? 'border-green-400 bg-green-50'
                : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md',
          ]"
        >
          <h3 class="font-semibold text-gray-800">{{ lesson.title }}</h3>
          <CheckCircle
            v-if="progressStore.isLessonCompleted(selectedModule.id, lesson.id)"
            class="h-5 w-5 text-green-500"
          />
          <Lock v-else class="h-5 w-5 text-gray-400" />
        </div>
      </div>

      <!-- Detalhes da Lição -->
      <div
        v-if="selectedLesson"
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
      >
        <div class="bg-gradient-to-r from-primary-500 to-primary-700 p-6 text-white">
          <h3 class="mb-2 text-2xl font-bold">{{ selectedLesson.title }}</h3>
        </div>

        <div class="space-y-6 p-6">
          <div class="rounded-r-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <h4 class="mb-2 flex items-center gap-2 font-semibold text-blue-800">
              <BookOpen class="h-5 w-5" />
              Teoria
            </h4>
            <p class="leading-relaxed text-blue-700">{{ selectedLesson.theory }}</p>
          </div>

          <ExerciseSection
            :exercise="selectedLesson.exercise"
            @exercise-completed="onExerciseCompleted"
          />

          <div class="flex flex-wrap gap-3 border-t border-gray-200 pt-4">
            <button
              v-if="showNextButton"
              @click="goToNextLesson"
              class="flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-600"
            >
              Próxima Lição
              <ArrowRight class="h-4 w-4" />
            </button>
            <button
              @click="closeLesson"
              class="flex items-center gap-2 rounded-lg bg-gray-500 px-6 py-3 font-semibold text-white transition-all hover:bg-gray-600"
            >
              Fechar Lição
              <X class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- Badge de Módulo Completo -->
      <div
        v-if="allLessonsComplete"
        class="rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-center text-white shadow-lg"
      >
        <div class="flex items-center justify-center gap-3 text-2xl font-bold">
          <Award class="h-8 w-8" />
          🎉 Parabéns! Você completou este módulo! 🎉
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowLeft, ArrowRight, CheckCircle, Lock, BookOpen, X, Award } from 'lucide-vue-next'
import { modules } from '../data/modules.js'
import { useProgressStore } from '../stores/progress.js'
import ExerciseSection from './ExerciseSection.vue'

const progressStore = useProgressStore()

const selectedModule = ref(null)
const selectedLesson = ref(null)

const moduleLessonsCompleted = computed(() =>
  selectedModule.value ? progressStore.completedLessons[selectedModule.value.id] || [] : []
)

const allLessonsComplete = computed(
  () =>
    selectedModule.value &&
    moduleLessonsCompleted.value.length === selectedModule.value.lessons.length
)

const showNextButton = computed(() => {
  if (!selectedLesson.value || !selectedModule.value) return false
  const currentIndex = selectedModule.value.lessons.findIndex(
    (l) => l.id === selectedLesson.value.id
  )
  return (
    currentIndex < selectedModule.value.lessons.length - 1 &&
    progressStore.isLessonCompleted(selectedModule.value.id, selectedLesson.value.id)
  )
})

const selectModule = (moduleId) => {
  selectedModule.value = modules.find((m) => m.id === moduleId)
  selectedLesson.value = null
}

const selectLesson = (lesson) => {
  selectedLesson.value = lesson
}

const onExerciseCompleted = () => {
  progressStore.completeLesson(selectedModule.value.id, selectedLesson.value.id)

  if (allLessonsComplete.value) {
    progressStore.completeModule(selectedModule.value.id)
  }
}

const goToNextLesson = () => {
  const currentIndex = selectedModule.value.lessons.findIndex(
    (l) => l.id === selectedLesson.value.id
  )
  const nextLesson = selectedModule.value.lessons[currentIndex + 1]
  if (nextLesson) {
    selectedLesson.value = nextLesson
  }
}

const closeLesson = () => {
  selectedLesson.value = null
}
</script>
