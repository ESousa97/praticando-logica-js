// src/components/ProgressBar.vue
<template>
  <div class="progress-bar">
    <div 
      class="progress-fill" 
      :style="{ width: `${Math.min(progress, 100)}%` }"
    >
      {{ Math.round(progress) }}% Completo
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0
    }
  }
}
</script>
