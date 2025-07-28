// src/components/PracticeArea.vue
<template>
  <div class="practice-area">
    <div class="practice-header">
      <h2>💻 Área de Prática</h2>
      <p>Teste seus conhecimentos com exercícios rápidos!</p>
    </div>

    <div class="practice-categories">
      <div 
        v-for="category in practiceCategories"
        :key="category.id"
        class="practice-category"
        @click="selectCategory(category)"
      >
        <div class="category-icon">{{ category.icon }}</div>
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
        <div class="category-difficulty">
          <span class="difficulty-badge" :class="category.difficulty">
            {{ category.difficulty }}
          </span>
        </div>
      </div>
    </div>

    <!-- Exercício Selecionado -->
    <div v-if="selectedExercise" class="current-exercise">
      <div class="exercise-header">
        <h3>{{ selectedExercise.title }}</h3>
        <button class="btn btn-outline" @click="selectedExercise = null">
          Fechar
        </button>
      </div>
      
      <ExerciseSection 
        :exercise="selectedExercise"
        @exercise-completed="onPracticeCompleted"
      />
    </div>

    <!-- Histórico de Prática -->
    <div v-if="practiceHistory.length > 0" class="practice-history">
      <h3>📊 Histórico Recente</h3>
      <div class="history-items">
        <div 
          v-for="item in practiceHistory.slice(0, 5)"
          :key="item.id"
          class="history-item"
        >
          <span class="history-icon">{{ item.correct ? '✅' : '❌' }}</span>
          <span class="history-title">{{ item.title }}</span>
          <span class="history-time">{{ formatTime(item.timestamp) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserProgressStore } from '../stores/userProgress'
import ExerciseSection from './lesson/ExerciseSection.vue'

export default {
  name: 'PracticeArea',
  components: {
    ExerciseSection
  },

  setup() {
    const userProgress = useUserProgressStore()
    return { userProgress }
  },

  data() {
    return {
      selectedExercise: null,
      practiceHistory: JSON.parse(localStorage.getItem('practiceHistory')) || [],
      practiceCategories: [
        {
          id: 'variables',
          title: 'Variáveis',
          icon: '🔢',
          description: 'Pratique declaração e manipulação de variáveis',
          difficulty: 'beginner',
          exercises: [
            {
              title: 'Soma de Variáveis',
              type: 'code',
              question: 'Crie duas variáveis (a = 10, b = 20) e calcule sua soma:',
              placeholder: 'let a = 10;\nlet b = 20;\n// Calcule a soma',
              answer: ['let', 'a', '10', 'b', '20', 'soma', '+'],
              hint: 'Use let para declarar variáveis e + para somar'
            }
          ]
        },
        {
          id: 'conditionals',
          title: 'Condicionais',
          icon: '🤔',
          description: 'Teste sua lógica com if/else',
          difficulty: 'beginner',
          exercises: [
            {
              title: 'Verificar Maioridade',
              type: 'number',
              question: 'Digite uma idade. O código deve verificar se é maior de idade (18+):',
              placeholder: 'Digite uma idade',
              answer: 'maior',
              hint: 'Use if (idade >= 18) para verificar'
            }
          ]
        },
        {
          id: 'functions',
          title: 'Funções',
          icon: '⚙️',
          description: 'Crie e use funções',
          difficulty: 'intermediate',
          exercises: []
        },
        {
          id: 'arrays',
          title: 'Arrays',
          icon: '📋',
          description: 'Manipule listas e arrays',
          difficulty: 'intermediate',
          exercises: []
        }
      ]
    }
  },

  methods: {
    selectCategory(category) {
      if (category.exercises.length > 0) {
        // Selecionar exercício aleatório da categoria
        const randomIndex = Math.floor(Math.random() * category.exercises.length)
        this.selectedExercise = {
          ...category.exercises[randomIndex],
          categoryId: category.id
        }
      }
    },

    onPracticeCompleted(isCorrect) {
      const historyItem = {
        id: Date.now(),
        title: this.selectedExercise.title,
        correct: isCorrect,
        timestamp: new Date(),
        categoryId: this.selectedExercise.categoryId
      }

      this.practiceHistory.unshift(historyItem)
      this.practiceHistory = this.practiceHistory.slice(0, 20) // Manter apenas 20 últimos

      localStorage.setItem('practiceHistory', JSON.stringify(this.practiceHistory))

      if (isCorrect) {
        this.userProgress.addPoints(5) // Pontos por prática
      }
    },

    formatTime(timestamp) {
      const now = new Date()
      const diff = now - new Date(timestamp)
      const minutes = Math.floor(diff / 60000)
      
      if (minutes < 1) return 'Agora mesmo'
      if (minutes < 60) return `${minutes}m atrás`
      
      const hours = Math.floor(minutes / 60)
      if (hours < 24) return `${hours}h atrás`
      
      const days = Math.floor(hours / 24)
      return `${days}d atrás`
    }
  }
}
</script>

<style scoped>
.practice-area {
  max-width: 1000px;
  margin: 0 auto;
}

.practice-header {
  text-align: center;
  margin-bottom: 2rem;
}

.practice-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.practice-category {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  cursor: pointer;
  transition: var(--transition);
  text-align: center;
}

.practice-category:hover {
  border-color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-difficulty {
  margin-top: 1rem;
}

.difficulty-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.difficulty-badge.beginner {
  background: #d4edda;
  color: #155724;
}

.difficulty-badge.intermediate {
  background: #fff3cd;
  color: #856404;
}

.difficulty-badge.advanced {
  background: #f8d7da;
  color: #721c24;
}

.current-exercise {
  background: var(--bg-light);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin: 2rem 0;
}

.exercise-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.practice-history {
  margin-top: 2rem;
}

.history-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: white;
  border-radius: var(--border-radius-sm);
  border: 1px solid #e9ecef;
}

.history-icon {
  font-size: 1.2rem;
}

.history-title {
  flex: 1;
  font-weight: 500;
}

.history-time {
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
