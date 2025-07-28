// src/components/lesson/InteractiveDemo.vue
<template>
  <div class="interactive-demo">
    <div class="demo-title">
      🎮 Demonstração Interativa
    </div>
    
    <component 
      :is="demoComponent" 
      @completed="$emit('completed')"
      v-if="demoComponent"
    />
    
    <div v-else class="demo-placeholder">
      <p>Demonstração em desenvolvimento...</p>
    </div>
  </div>
</template>

<script>
import VariableDemo from '../interactive/VariableDemo.vue'
import ConditionalDemo from '../interactive/ConditionalDemo.vue'

export default {
  name: 'InteractiveDemo',
  
  components: {
    VariableDemo,
    ConditionalDemo
  },

  props: {
    demoComponent: {
      type: String,
      required: true
    }
  },

  emits: ['completed']
}
</script>

<style scoped>
.interactive-demo {
  background: white;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.demo-title {
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
}

.demo-placeholder {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  font-style: italic;
}
</style>
