<template>
  <div class="bg-gray-50 rounded-xl p-6 border-l-4 border-primary-500">
    <h4 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
      <Code class="w-5 h-5" />
      Exercício Prático
    </h4>
    
    <p class="text-gray-700 mb-4 font-medium">{{ exercise.question }}</p>

    <textarea v-if="exercise.type === 'code'"
              v-model="userAnswer"
              :placeholder="exercise.placeholder"
              rows="6"
              class="w-full p-4 border border-gray-300 rounded-lg font-mono text-sm bg-gray-900 text-green-400 placeholder-green-300/50 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
    />
    
    <input v-else
           v-model="userAnswer"
           :placeholder="exercise.placeholder"
           :type="exercise.type || 'text'"
           class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    />

    <div class="flex flex-wrap gap-3 mt-4">
      <button @click="checkAnswer" 
              :disabled="isCompleted"
              :class="[
                'px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2',
                isCompleted 
                  ? 'bg-green-500 text-white cursor-not-allowed' 
                  : 'bg-primary-500 hover:bg-primary-600 text-white hover:shadow-lg'
              ]">
        <CheckCircle v-if="isCompleted" class="w-4 h-4" />
        <Play v-else class="w-4 h-4" />
        {{ isCompleted ? 'Concluído!' : 'Verificar Resposta' }}
      </button>
      
      <button v-if="showHintButton"
              @click="showHint = !showHint"
              class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-all flex items-center gap-2">
        <Lightbulb class="w-4 h-4" />
        {{ showHint ? 'Ocultar' : 'Ver' }} Dica
      </button>
    </div>

    <div v-if="showHint" class="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <div class="flex items-start gap-2">
        <Lightbulb class="w-5 h-5 text-yellow-600 mt-0.5" />
        <div>
          <strong class="text-yellow-800">Dica:</strong>
          <p class="text-yellow-700 mt-1">{{ exercise.hint }}</p>
        </div>
      </div>
    </div>

    <div v-if="feedback" 
         :class="[
           'mt-4 p-4 rounded-lg flex items-center gap-2 font-semibold',
           feedbackType === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
         ]">
      <CheckCircle v-if="feedbackType === 'success'" class="w-5 h-5" />
      <X v-else class="w-5 h-5" />
      {{ feedback }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Code, CheckCircle, Play, Lightbulb, X } from 'lucide-vue-next'

const props = defineProps({
  exercise: { type: Object, required: true }
})

const emit = defineEmits(['exercise-completed'])

const userAnswer = ref('')
const feedback = ref('')
const feedbackType = ref('')
const isCompleted = ref(false)
const attempts = ref(0)
const showHint = ref(false)

const showHintButton = computed(() => 
  attempts.value >= 2 && props.exercise.hint && !isCompleted.value
)

const resetExercise = () => {
  userAnswer.value = ''
  feedback.value = ''
  feedbackType.value = ''
  isCompleted.value = false
  attempts.value = 0
  showHint.value = false
}

const validateAnswer = () => {
  if (props.exercise.type === 'code') {
    const code = userAnswer.value.toLowerCase()
    return props.exercise.answer.every(term => 
      code.includes(term.toLowerCase())
    )
  }
  return userAnswer.value.toLowerCase().includes(props.exercise.answer.toLowerCase())
}

const checkAnswer = () => {
  attempts.value++
  if (validateAnswer()) {
    feedback.value = '🎉 Parabéns! Resposta correta!'
    feedbackType.value = 'success'
    isCompleted.value = true
    emit('exercise-completed')
  } else {
    feedback.value = '❌ Ops! Tente novamente.'
    feedbackType.value = 'error'
  }
}

watch(() => props.exercise, resetExercise, { immediate: true })
</script>
