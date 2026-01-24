<template>
  <div class="border-primary-500 rounded-xl border-l-4 bg-gray-50 p-6">
    <h4 class="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
      <Code class="h-5 w-5" />
      Exercício Prático
    </h4>

    <p class="mb-4 font-medium text-gray-700">{{ exercise.question }}</p>

    <textarea
      v-if="exercise.type === 'code'"
      v-model="userAnswer"
      :placeholder="exercise.placeholder"
      rows="6"
      class="focus:ring-primary-500 w-full resize-none rounded-lg border border-gray-300 bg-gray-900 p-4 font-mono text-sm text-green-400 placeholder-green-300/50 focus:border-transparent focus:ring-2"
    />

    <input
      v-else
      v-model="userAnswer"
      :placeholder="exercise.placeholder"
      :type="exercise.type || 'text'"
      class="focus:ring-primary-500 w-full rounded-lg border border-gray-300 p-3 focus:border-transparent focus:ring-2"
    />

    <div class="mt-4 flex flex-wrap gap-3">
      <button
        @click="checkAnswer"
        :disabled="isCompleted"
        :class="[
          'flex items-center gap-2 rounded-lg px-6 py-2 font-semibold transition-all',
          isCompleted
            ? 'cursor-not-allowed bg-green-500 text-white'
            : 'bg-primary-500 hover:bg-primary-600 text-white hover:shadow-lg',
        ]"
      >
        <CheckCircle v-if="isCompleted" class="h-4 w-4" />
        <Play v-else class="h-4 w-4" />
        {{ isCompleted ? 'Concluído!' : 'Verificar Resposta' }}
      </button>

      <button
        v-if="showHintButton"
        @click="showHint = !showHint"
        class="flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-white transition-all hover:bg-yellow-600"
      >
        <Lightbulb class="h-4 w-4" />
        {{ showHint ? 'Ocultar' : 'Ver' }} Dica
      </button>
    </div>

    <div v-if="showHint" class="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
      <div class="flex items-start gap-2">
        <Lightbulb class="mt-0.5 h-5 w-5 text-yellow-600" />
        <div>
          <strong class="text-yellow-800">Dica:</strong>
          <p class="mt-1 text-yellow-700">{{ exercise.hint }}</p>
        </div>
      </div>
    </div>

    <div
      v-if="feedback"
      :class="[
        'mt-4 flex items-center gap-2 rounded-lg p-4 font-semibold',
        feedbackType === 'success'
          ? 'border border-green-200 bg-green-50 text-green-800'
          : 'border border-red-200 bg-red-50 text-red-800',
      ]"
    >
      <CheckCircle v-if="feedbackType === 'success'" class="h-5 w-5" />
      <X v-else class="h-5 w-5" />
      {{ feedback }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Code, CheckCircle, Play, Lightbulb, X } from 'lucide-vue-next'

const props = defineProps({
  exercise: { type: Object, required: true },
})

const emit = defineEmits(['exercise-completed'])

const userAnswer = ref('')
const feedback = ref('')
const feedbackType = ref('')
const isCompleted = ref(false)
const attempts = ref(0)
const showHint = ref(false)

const showHintButton = computed(
  () => attempts.value >= 2 && props.exercise.hint && !isCompleted.value
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
    return props.exercise.answer.every((term) => code.includes(term.toLowerCase()))
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
