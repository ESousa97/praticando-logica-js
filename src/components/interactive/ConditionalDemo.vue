// src/components/interactive/ConditionalDemo.vue
<template>
  <div class="conditional-demo">
    <div class="demo-explanation">
      <p>Digite sua idade e veja como funciona a estrutura condicional:</p>
    </div>

    <div class="demo-controls">
      <div class="age-input">
        <label>Sua idade:</label>
        <input 
          type="number" 
          v-model.number="age" 
          class="number-input"
          placeholder="Digite sua idade"
          min="0"
          max="150"
        >
      </div>

      <button @click="checkAge" class="btn btn-primary demo-btn">
        Verificar Idade
      </button>
    </div>

    <div v-if="hasResult" class="demo-result">
      <div class="result-display" :class="resultClass">
        <h4>Resultado:</h4>
        <div class="age-message">
          {{ message }}
        </div>
      </div>
      
      <div class="code-visualization">
        <h5>Código JavaScript:</h5>
        <pre class="code-block">let idade = {{ age }};

if (idade >= 18) {
    console.log("{{ age >= 18 ? 'Você é maior de idade! 🎉' : 'Você é menor de idade.' }}");
} else {
    console.log("{{ age >= 18 ? 'Você é maior de idade! 🎉' : 'Você é menor de idade.' }}");
}</pre>
      </div>

      <div class="logic-explanation">
        <h5>💡 Como funciona:</h5>
        <p>
          A condição <code>idade >= 18</code> retorna <strong>{{ age >= 18 ? 'true' : 'false' }}</strong>, 
          por isso o código {{ age >= 18 ? 'entra no bloco if' : 'entra no bloco else' }}.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConditionalDemo',
  
  emits: ['completed'],

  data() {
    return {
      age: null,
      message: '',
      hasResult: false
    }
  },

  computed: {
    resultClass() {
      if (!this.hasResult) return ''
      return this.age >= 18 ? 'result-adult' : 'result-minor'
    }
  },

  methods: {
    checkAge() {
      if (this.age && this.age > 0) {
        this.message = this.age >= 18 
          ? `Com ${this.age} anos, você é maior de idade! 🎉`
          : `Com ${this.age} anos, você é menor de idade.`
        
        this.hasResult = true
        this.$emit('completed')
      }
    }
  }
}
</script>

<style scoped>
.conditional-demo {
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

.age-input {
  display: flex;
  align-items: center;
  gap: 10px;
}

.age-input label {
  min-width: 100px;
  font-weight: 600;
}

.number-input {
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  width: 150px;
}

.demo-result {
  margin-top: 20px;
}

.result-display {
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.result-adult {
  background: linear-gradient(135deg, #d4edda, #c3e6cb);
  border: 2px solid #28a745;
}

.result-minor {
  background: linear-gradient(135deg, #fff3cd, #ffeaa7);
  border: 2px solid #ffc107;
}

.age-message {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
}

.code-visualization {
  margin: 15px 0;
}

.code-block {
  background: #1e1e1e;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  overflow-x: auto;
  line-height: 1.4;
}

.logic-explanation {
  background: #e7f3ff;
  border: 1px solid #b3d9ff;
  border-radius: 6px;
  padding: 15px;
  margin-top: 15px;
}

.logic-explanation code {
  background: rgba(0,0,0,0.1);
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Fira Code', monospace;
}
</style>
