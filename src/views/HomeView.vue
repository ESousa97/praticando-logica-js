<template>
  <section class="home-view">
    <h1>Bem-vindo à Jornada JavaScript</h1>
    <p>
      Este curso oferece uma experiência completa para aprender JavaScript do zero até níveis avançados.
      Pratique exercícios interativos, acompanhe seu progresso e desbloqueie novos desafios.
    </p>

    <router-link to="/modules" class="btn btn-primary mt-4">
      Comece sua jornada
    </router-link>
  </section>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home-view {
  max-width: 700px;
  margin: 3rem auto;
  text-align: center;
  color: var(--text-primary, #222);
}

.home-view h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--primary-color, #667eea);
  text-shadow: 1px 1px 3px rgba(102, 126, 234, 0.5);
}

.home-view p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-secondary, #555);
}

.btn {
  padding: 0.75rem 2rem;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: var(--border-radius-sm, 6px);
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: white;
  background: var(--primary-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.5);
}

.btn:hover {
  background: var(--primary-color, #5564c9);
  box-shadow: 0 6px 20px rgba(85, 100, 201, 0.7);
}
</style>
