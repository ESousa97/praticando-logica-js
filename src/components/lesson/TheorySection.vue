/ src/components/lesson/TheorySection.vue
<template>
  <div class="theory-section">
    <h3>📖 Conceito</h3>
    <div class="theory-content" v-html="formattedTheory"></div>
    
    <div v-if="codeExample" class="code-example">
      <pre><code>{{ codeExample }}</code></pre>
    </div>

    <div v-if="keyPoints && keyPoints.length > 0" class="key-points">
      <h4>🔑 Pontos Importantes:</h4>
      <ul>
        <li v-for="point in keyPoints" :key="point">{{ point }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheorySection',
  
  props: {
    theory: {
      type: String,
      required: true
    },
    codeExample: {
      type: String,
      default: null
    },
    keyPoints: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    formattedTheory() {
      // Converter markdown simples para HTML
      return this.theory
        .replace(/`([^`]+)`/g, '<code class="highlight">$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    }
  }
}
</script>

<style scoped>
.theory-section {
  background: var(--bg-light);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid var(--primary-color);
}

.theory-section h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.theory-content {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.key-points {
  background: white;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  margin-top: 1rem;
}

.key-points h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.key-points ul {
  margin-left: 1.5rem;
}

.key-points li {
  margin-bottom: 0.5rem;
}
</style>
