<!-- src/views/AchievementsView.vue -->
<template>
  <div class="achievements-view">
    <AchievementsDisplay />
  </div>
</template>

<script>
import AchievementsDisplay from '../components/AchievementsDisplay.vue'

export default {
  name: 'AchievementsView',
  components: {
    AchievementsDisplay
  }
}
</script>

<style scoped>
.achievements-view {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>

