<template>
  <section class="modules-view">
    <h1>Escolha seu Módulo</h1>
    <p>Selecione um módulo para começar a aprender e praticar.</p>

    <div class="modules-grid">
      <div
        v-for="module in modules"
        :key="module.id"
        class="module-card"
        :style="{ borderColor: module.color }"
        :class="{ completed: completedModules.includes(module.id) }"
      >
        <div class="module-info" @click="goToModule(module.id)">
          <h2>{{ module.title }}</h2>
          <p>{{ module.description }}</p>
        </div>

        <div class="module-actions">
          <button
            class="btn btn-primary"
            @click.prevent="goToModule(module.id)"
          >
            Ver Lições
            <ArrowRightIcon />
          </button>
        </div>

        <div
          v-if="completedModules.includes(module.id)"
          class="completed-badge"
          title="Módulo concluído"
        >
          <CheckCircleIcon />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ArrowRightIcon, CheckCircleIcon } from "lucide-vue-next";
import { modules } from "../data/modules.js";

export default {
  name: "ModulesView",
  components: {
    ArrowRightIcon,
    CheckCircleIcon,
  },
  data() {
    return {
      modules,
      completedModules: JSON.parse(localStorage.getItem("completedModules")) || [],
    };
  },
  methods: {
    goToModule(moduleId) {
      // Navega para a primeira lição do módulo
      const module = this.modules.find((m) => m.id === moduleId);
      if (module && module.lessons.length > 0) {
        const firstLessonId = module.lessons[0].id;
        this.$router.push({
          name: "Lesson",
          params: { moduleId, lessonId: firstLessonId },
        });
      }
    },
  },
};
</script>

<style scoped>
.modules-view {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
  color: #222;
}

.modules-view h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.modules-view p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #555;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.module-card {
  border: 3px solid #ddd;
  border-radius: 16px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.module-card:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.module-card.completed {
  border-color: #4caf50;
  background: #eafbee;
}

.module-info h2 {
  margin: 0 0 0.5rem;
  font-weight: 700;
  color: var(--primary-color, #667eea);
}

.module-info p {
  font-size: 0.95rem;
  color: #555;
  margin: 0;
  line-height: 1.3;
}

.module-actions {
  margin-top: 1rem;
  text-align: right;
}

.btn {
  background: var(--primary-color, #667eea);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background: #5469d4;
}

.completed-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #4caf50;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 50%;
  box-shadow: 0 0 8px #4caf50aa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.completed-badge svg {
  width: 22px;
  height: 22px;
}
</style>
