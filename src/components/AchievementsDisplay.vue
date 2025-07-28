// src/components/AchievementsDisplay.vue
<template>
  <div class="achievements-display">
    <div class="achievements-header">
      <h2>🏆 Suas Conquistas</h2>
      <p>Acompanhe seu progresso e desbloqueie novas conquistas!</p>
    </div>

    <!-- Estatísticas de Conquistas -->
    <div class="achievement-stats">
      <div class="stat-item">
        <span class="stat-number">{{ earnedBadges.length }}</span>
        <span class="stat-label">Conquistas Desbloqueadas</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ totalBadges }}</span>
        <span class="stat-label">Total Disponível</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ completionPercentage }}%</span>
        <span class="stat-label">Progresso</span>
      </div>
    </div>

    <!-- Conquistas Recentes -->
    <div v-if="lastCompleted" class="celebration">
      <h3>🎉 Parabéns!</h3>
      <p>Você completou: {{ lastCompleted }}</p>
      <p>+ {{ lastPoints }} pontos!</p>
    </div>

    <!-- Grid de Conquistas -->
    <div class="badges-section">
      <h3>📋 Todas as Conquistas</h3>
      <div class="badges-grid">
        <div 
          v-for="badge in allBadges"
          :key="badge.id"
          class="badge-card"
          :class="{ earned: isBadgeEarned(badge.id), locked: !isBadgeEarned(badge.id) }"
        >
          <div class="badge-icon">{{ badge.icon }}</div>
          <h4 class="badge-name">{{ badge.name }}</h4>
          <p class="badge-description">{{ badge.description }}</p>
          <div v-if="isBadgeEarned(badge.id)" class="badge-earned-date">
            Conquistado em {{ formatDate(getBadgeEarnedDate(badge.id)) }}
          </div>
          <div v-else class="badge-requirement">
            {{ badge.requirement }}
          </div>
        </div>
      </div>
    </div>

    <!-- Próximas Conquistas -->
    <div class="next-achievements">
      <h3>🎯 Próximas Conquistas</h3>
      <div class="next-badges">
        <div 
          v-for="badge in nextBadges"
          :key="badge.id"
          class="next-badge"
        >
          <span class="next-badge-icon">{{ badge.icon }}</span>
          <div class="next-badge-info">
            <h5>{{ badge.name }}</h5>
            <p>{{ badge.requirement }}</p>
            <div class="progress-indicator">
              <div class="progress-bar-small">
                <div 
                  class="progress-fill-small" 
                  :style="{ width: `${badge.progress}%` }"
                ></div>
              </div>
              <span class="progress-text">{{ badge.progress }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserProgressStore } from '../stores/userProgress'

export default {
  name: 'AchievementsDisplay',

  setup() {
    const userProgress = useUserProgressStore()
    return { userProgress }
  },

  computed: {
    earnedBadges() {
      return this.userProgress.earnedBadges
    },

    lastCompleted() {
      return this.userProgress.lastCompleted
    },

    lastPoints() {
      return this.userProgress.lastPoints
    },

    allBadges() {
      return [
        {
          id: 'first-lesson',
          name: 'Primeiro Passo',
          icon: '🚀',
          description: 'Complete sua primeira lição',
          requirement: 'Complete 1 lição'
        },
        {
          id: 'dedicated-learner',
          name: 'Estudante Dedicado',
          icon: '📚',
          description: 'Complete 10 lições',
          requirement: 'Complete 10 lições'
        },
        {
          id: 'code-warrior',
          name: 'Guerreiro do Código',
          icon: '⚔️',
          description: 'Complete 25 exercícios de código',
          requirement: 'Complete 25 exercícios'
        },
        {
          id: 'javascript-master',
          name: 'Mestre JavaScript',
          icon: '👑',
          description: 'Complete todos os módulos básicos',
          requirement: 'Complete 5 módulos'
        },
        {
          id: 'speed-learner',
          name: 'Aprendiz Veloz',
          icon: '⚡',
          description: 'Complete 5 lições em um dia',
          requirement: 'Complete 5 lições em 24h'
        },
        {
          id: 'practice-champion',
          name: 'Campeão da Prática',
          icon: '🏅',
          description: 'Acerte 50 exercícios práticos',
          requirement: 'Acerte 50 exercícios'
        },
        {
          id: 'persistent',
          name: 'Persistente',
          icon: '💪',
          description: 'Estude por 7 dias consecutivos',
          requirement: 'Estude 7 dias seguidos'
        },
        {
          id: 'perfectionist',
          name: 'Perfeccionista',
          icon: '💎',
          description: 'Complete um módulo sem erros',
          requirement: 'Zero erros em um módulo'
        }
      ]
    },

    totalBadges() {
      return this.allBadges.length
    },

    completionPercentage() {
      return Math.round((this.earnedBadges.length / this.totalBadges) * 100)
    },

    nextBadges() {
      return this.allBadges
        .filter(badge => !this.isBadgeEarned(badge.id))
        .slice(0, 3)
        .map(badge => ({
          ...badge,
          progress: this.calculateBadgeProgress(badge)
        }))
    }
  },

  methods: {
    isBadgeEarned(badgeId) {
      return this.earnedBadges.some(badge => badge.id === badgeId)
    },

    getBadgeEarnedDate(badgeId) {
      const badge = this.earnedBadges.find(b => b.id === badgeId)
      return badge?.earnedAt || new Date()
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR')
    },

    calculateBadgeProgress(badge) {
      // Calcular progresso baseado no tipo de conquista
      const completedLessons = this.userProgress.completedLessons.length
      
      switch (badge.id) {
        case 'first-lesson':
          return Math.min(completedLessons * 100, 100)
        case 'dedicated-learner':
          return Math.min((completedLessons / 10) * 100, 100)
        case 'javascript-master':
          return Math.min((this.userProgress.completedModules.length / 5) * 100, 100)
        default:
          return 0
      }
    }
  }
}
</script>

<style scoped>
.achievements-display {
  max-width: 1000px;
  margin: 0 auto;
}

.achievements-header {
  text-align: center;
  margin-bottom: 2rem;
}

.achievement-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: var(--bg-light);
  border-radius: var(--border-radius);
  min-width: 120px;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.badges-section {
  margin: 2rem 0;
}

.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.badge-card {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  text-align: center;
  transition: var(--transition);
}

.badge-card.earned {
  border-color: var(--success-color);
  background: linear-gradient(135deg, #f8fff9, #e8f5e8);
}

.badge-card.locked {
  opacity: 0.6;
  background: #f8f9fa;
}

.badge-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.badge-name {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.badge-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.badge-earned-date {
  font-size: 0.8rem;
  color: var(--success-color);
  font-weight: 600;
}

.badge-requirement {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-style: italic;
}

.next-achievements {
  margin: 2rem 0;
}

.next-badges {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.next-badge {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: var(--border-radius);
}

.next-badge-icon {
  font-size: 2rem;
}

.next-badge-info {
  flex: 1;
}

.next-badge-info h5 {
  margin-bottom: 0.25rem;
}

.next-badge-info p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.progress-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.progress-bar-small {
  flex: 1;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill-small {
  height: 100%;
  background: var(--primary-gradient);
  transition: width 0.5s ease;
}

.progress-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-color);
}
</style>
