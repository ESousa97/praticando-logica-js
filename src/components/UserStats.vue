// src/components/UserStats.vue
<template>
  <div class="user-stats">
    <div class="stat-card">
      <span class="stat-number">{{ stats.totalExercises }}</span>
      <span class="stat-label">Exercícios</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">{{ stats.completedExercises }}</span>
      <span class="stat-label">Concluídos</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">{{ stats.userLevel }}</span>
      <span class="stat-label">Nível</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">{{ stats.userPoints }}</span>
      <span class="stat-label">Pontos</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserStats',
  props: {
    stats: {
      type: Object,
      required: true
    }
  }
}
</script>
