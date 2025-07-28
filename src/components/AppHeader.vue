// src/components/AppHeader.vue
<template>
  <header class="app-header">
    <div class="header-content">
      <h1>🚀 Academia JavaScript</h1>
      <p class="subtitle">Aprenda programação de forma interativa e divertida!</p>
      
      <UserStats :stats="userStats" />
      <ProgressBar :progress="overallProgress" />
    </div>
  </header>
</template>

<script>
import { useUserProgressStore } from '../stores/userProgress'
import UserStats from './UserStats.vue'
import ProgressBar from './ProgressBar.vue'

export default {
  name: 'AppHeader',
  components: {
    UserStats,
    ProgressBar
  },

  setup() {
    const userProgress = useUserProgressStore()
    return { userProgress }
  },

  computed: {
    userStats() {
      return {
        totalExercises: this.userProgress.totalExercises,
        completedExercises: this.userProgress.completedExercises,
        userLevel: this.userProgress.userLevel,
        userPoints: this.userProgress.userPoints
      }
    },

    overallProgress() {
      return this.userProgress.overallProgress
    }
  }
}
</script>
