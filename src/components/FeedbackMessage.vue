// src/components/FeedbackMessage.vue
<template>
  <div class="feedback-message" :class="feedbackClass">
    <div class="feedback-icon">
      {{ feedbackIcon }}
    </div>
    <div class="feedback-text">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackMessage',
  
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info',
      validator: value => ['success', 'error', 'warning', 'info'].includes(value)
    }
  },

  computed: {
    feedbackClass() {
      return `feedback-${this.type}`
    },

    feedbackIcon() {
      const icons = {
        success: '🎉',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
      }
      return icons[this.type] || icons.info
    }
  }
}
</script>

<style scoped>
.feedback-message {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  animation: fadeIn 0.3s ease;
}

.feedback-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.feedback-text {
  flex: 1;
}
</style>
