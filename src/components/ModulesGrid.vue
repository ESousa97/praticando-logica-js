<template>
  <div>
    <div class="modules-grid">
      <div
        v-for="module in modules"
        :key="module.id"
        :class="['module-card', { completed: completedModules.includes(module.id) }]"
        @click="select(module)"
        :style="{ borderColor: module.color }"
      >
        <h3>{{ module.title }}</h3>
        <p>{{ module.description }}</p>
        <div
          v-if="completedModules.includes(module.id)"
          class="module-completed-banner"
        >
          Concluído!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModulesGrid',
  props: {
    modules: Array,
    completedModules: Array,
  },
  emits: ['module-select'],
  methods: {
    select(module) {
      this.$emit('module-select', module.id);
    },
  },
};
</script>
