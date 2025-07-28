/ src/components/NavigationTabs.vue
<template>
  <nav class="nav-tabs">
    <button 
      v-for="tab in tabs"
      :key="tab.id"
      class="nav-tab" 
      :class="{ active: currentTab === tab.id }"
      @click="$emit('tab-change', tab.id)"
    >
      {{ tab.icon }} {{ tab.label }}
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavigationTabs',
  
  props: {
    currentTab: {
      type: String,
      required: true
    }
  },

  emits: ['tab-change'],

  data() {
    return {
      tabs: [
        { id: 'modules', label: 'Módulos', icon: '📚' },
        { id: 'practice', label: 'Prática', icon: '💻' },
        { id: 'achievements', label: 'Conquistas', icon: '🏆' }
      ]
    }
  }
}
</script>
