<template>
  <div class="max-w-6xl mx-auto p-6">
    <!-- Grid de Módulos -->
    <div v-if="!selectedModule" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="module in modules" :key="module.id"
           @click="selectModule(module.id)"
           :class="[
             'relative p-6 rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2',
             progressStore.isModuleCompleted(module.id) ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-white hover:border-primary-300'
           ]">
        <div :class="['absolute inset-0 rounded-2xl bg-gradient-to-br opacity-10', module.color]"></div>
        
        <div class="relative z-10">
          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ module.title }}</h3>
          <p class="text-gray-600 mb-4">{{ module.description }}</p>
          
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">
              {{ progressStore.completedLessons[module.id]?.length || 0 }}/{{ module.lessons.length }} lições
            </span>
            <CheckCircle v-if="progressStore.isModuleCompleted(module.id)" 
                        class="w-6 h-6 text-green-500" />
          </div>
        </div>
      </div>
    </div>

    <!-- Módulo Selecionado -->
    <div v-else class="space-y-8">
      <div class="flex items-center gap-4 mb-6">
        <button @click="selectedModule = null" 
                class="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
          <ArrowLeft class="w-5 h-5" />
          Voltar
        </button>
      </div>

      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ selectedModule.title }}</h2>
        <p class="text-xl text-gray-600">{{ selectedModule.description }}</p>
        <div class="mt-4 bg-gray-200 rounded-full h-3 overflow-hidden">
          <div :class="['h-full bg-gradient-to-r transition-all duration-500', selectedModule.color]"
               :style="{ width: `${(moduleLessonsCompleted.length / selectedModule.lessons.length) * 100}%` }">
          </div>
        </div>
        <p class="mt-2 text-sm text-gray-600">
          Progresso: {{ moduleLessonsCompleted.length }}/{{ selectedModule.lessons.length }} lições
        </p>
      </div>

      <!-- Lista de Lições -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div v-for="lesson in selectedModule.lessons" :key="lesson.id"
             @click="selectLesson(lesson)"
             :class="[
               'p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-center justify-between',
               selectedLesson?.id === lesson.id ? 'border-primary-500 bg-primary-50' : 
               progressStore.isLessonCompleted(selectedModule.id, lesson.id) ? 'border-green-400 bg-green-50' : 
               'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
             ]">
          <h3 class="font-semibold text-gray-800">{{ lesson.title }}</h3>
          <CheckCircle v-if="progressStore.isLessonCompleted(selectedModule.id, lesson.id)" 
                      class="w-5 h-5 text-green-500" />
          <Lock v-else class="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <!-- Detalhes da Lição -->
      <div v-if="selectedLesson" class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div class="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-6">
          <h3 class="text-2xl font-bold mb-2">{{ selectedLesson.title }}</h3>
        </div>
        
        <div class="p-6 space-y-6">
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h4 class="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <BookOpen class="w-5 h-5" />
              Teoria
            </h4>
            <p class="text-blue-700 leading-relaxed">{{ selectedLesson.theory }}</p>
          </div>

          <ExerciseSection :exercise="selectedLesson.exercise" 
                          @exercise-completed="onExerciseCompleted" />

          <div class="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            <button v-if="showNextButton"
                    @click="goToNextLesson"
                    class="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all">
              Próxima Lição
              <ArrowRight class="w-4 h-4" />
            </button>
            <button @click="closeLesson"
                    class="flex items-center gap-2 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all">
              Fechar Lição
              <X class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- Badge de Módulo Completo -->
      <div v-if="allLessonsComplete" 
           class="text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
        <div class="flex items-center justify-center gap-3 text-2xl font-bold">
          <Award class="w-8 h-8" />
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
  selectedModule.value ? (progressStore.completedLessons[selectedModule.value.id] || []) : []
)

const allLessonsComplete = computed(() => 
  selectedModule.value && moduleLessonsCompleted.value.length === selectedModule.value.lessons.length
)

const showNextButton = computed(() => {
  if (!selectedLesson.value || !selectedModule.value) return false
  const currentIndex = selectedModule.value.lessons.findIndex(l => l.id === selectedLesson.value.id)
  return currentIndex < selectedModule.value.lessons.length - 1 && 
         progressStore.isLessonCompleted(selectedModule.value.id, selectedLesson.value.id)
})

const selectModule = (moduleId) => {
  selectedModule.value = modules.find(m => m.id === moduleId)
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
  const currentIndex = selectedModule.value.lessons.findIndex(l => l.id === selectedLesson.value.id)
  const nextLesson = selectedModule.value.lessons[currentIndex + 1]
  if (nextLesson) {
    selectedLesson.value = nextLesson
  }
}

const closeLesson = () => {
  selectedLesson.value = null
}
</script>