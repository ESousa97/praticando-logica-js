// src/components/interactive/VariableDemo.vue
<template>
  <div class="variable-demo">
    <div class="demo-explanation">
      <p>Vamos criar duas variáveis e somar elas!</p>
    </div>

    <div class="demo-controls">
      <div class="variable-input">
        <label>Primeira variável (a):</label>
        <input 
          type="number" 
          v-model.number="variable1" 
          class="number-input"
        >
      </div>
      
      <div class="variable-input">
        <label>Segunda variável (b):</label>
        <input 
          type="number" 
          v-model.number="variable2" 
          class="number-input"
        >
      </div>

      <button @click="calculate" class="btn btn-primary demo-btn">
        Calcular Soma
      </button>
    </div>

    <div v-if="hasResult" class="demo-result">
      <div class="result-display">
        <h4>Resultado:</h4>
        <div class="calculation">
          <span class="variable">{{ variable1 }}</span>
          <span class="operator">+</span>
          <span class="variable">{{ variable2 }}</span>
          <span class="equals">=</span>
          <span class="result">{{ result }}</span>
        </div>
      </div>
      
      <div class="code-visualization">
        <h5>Em JavaScript:</h5>
        <pre class="code-block">let a = {{ variable1 }};
let b = {{ variable2 }};
let soma = a + b; // {{ result }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VariableDemo',
  
  emits: ['completed'],

  data() {
    return {
      variable1: 5,
      variable2: 3,
      result: null,
      hasResult: false
    }
  },

  methods: {
    calculate() {
      this.result = this.variable1 + this.variable2
      this.hasResult = true
      this.$emit('completed')
    }
  }
}
</script>

<style scoped>
.variable-demo {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  border: 2px solid #e9ecef;
}

.demo-controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
}

.variable-input {
  display: flex;
  align-items: center;
  gap: 10px;
}

.variable-input label {
  min-width: 150px;
  font-weight: 600;
}

.number-input {
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  width: 100px;
}

.demo-result {
  margin-top: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 2px solid #28a745;
}

.calculation {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
}

.variable {
  background: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}

.operator, .equals {
  font-weight: bold;
  color: #495057;
}

.result {
  background: #28a745;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}

.code-visualization {
  margin-top: 15px;
}

.code-block {
  background: #1e1e1e;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  overflow-x: auto;
}
</style>
