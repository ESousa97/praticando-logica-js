// src/components/ModulesGrid.vue
<template>
  <div class="modules-container">
    <h2 class="modules-title">
      Escolha um módulo para começar sua jornada!
    </h2>
    
    <div class="modules-grid">
      <ModuleCard
        v-for="module in modules"
        :key="module.id"
        :module="module"
        :is-completed="isModuleCompleted(module.id)"
        :is-locked="isModuleLocked(module.id)"
        @click="$emit('module-select', module.id)"
      />
    </div>
  </div>
</template>

<script>
import { useUserProgressStore } from '../stores/userProgress'
import ModuleCard from './ModuleCard.vue'

export default {
  name: 'ModulesGrid',
  components: {
    ModuleCard
  },

  props: {
    modules: {
      type: Array,
      required: true
    }
  },

  emits: ['module-select'],

  setup() {
    const userProgress = useUserProgressStore()
    return { userProgress }
  },

  methods: {
    isModuleCompleted(moduleId) {
      return this.userProgress.isModuleCompleted(moduleId)
    },

    isModuleLocked(moduleId) {
      // Implementar lógica de desbloqueio
      return false
    }
  }
}
</script>
