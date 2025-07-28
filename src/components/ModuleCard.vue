// src/components/ModuleCard.vue
<template>
  <div 
    class="module-card"
    :class="{
      completed: isCompleted,
      locked: isLocked
    }"
    @click="handleClick"
  >
    <div class="module-title">
      {{ module.icon }} {{ module.title }}
    </div>
    
    <div class="module-description">
      {{ module.description }}
    </div>
    
    <div class="module-meta">
      <span>{{ module.difficulty }}</span>
      <span>{{ module.estimatedTime }}</span>
    </div>
    
    <div class="module-progress">
      <div 
        class="module-progress-fill" 
        :style="{ width: `${moduleProgress}%` }"
      ></div>
    </div>
    
    <div class="module-lessons-count">
      {{ module.lessons.length }} lições
    </div>

    <div v-if="isLocked" class="lock-overlay">
      🔒 Complete o módulo anterior
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCard',
  
  props: {
    module: {
      type: Object,
      required: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    isLocked: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  computed: {
    moduleProgress() {
      // Calcular progresso baseado nas lições completadas
      if (this.isCompleted) return 100
      // Implementar lógica real de progresso
      return 0
    }
  },

  methods: {
    handleClick() {
      if (!this.isLocked) {
        this.$emit('click', this.module.id)
      }
    }
  }
}
</script>

<style scoped>
.module-progress {
  background: rgba(255,255,255,0.2);
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
  margin: 1rem 0 0.5rem 0;
}

.module-progress-fill {
  background: white;
  height: 100%;
  transition: width 0.5s ease;
}

.module-lessons-count {
  font-size: 0.8rem;
  opacity: 0.8;
}

.lock-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: inherit;
}
</style>
