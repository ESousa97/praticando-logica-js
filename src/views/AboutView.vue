<template>
  <section class="about-view">
    <h1>Sobre o Curso</h1>
    <p>
      A Jornada JavaScript é um curso estruturado que guia o aluno desde os conceitos básicos até
      desafios avançados de programação. Nosso objetivo é proporcionar uma aprendizagem prática,
      eficiente e motivadora, com exercícios interativos e acompanhamento de progresso.
    </p>
    <p>
      Desenvolvido para iniciantes e programadores que desejam aprimorar suas habilidades, o curso aborda
      os principais tópicos de JavaScript com didática clara e exemplos reais.
    </p>
    <p>
      Venha aprender, praticar e evoluir no desenvolvimento web com uma metodologia moderna e acessível.
    </p>
  </section>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about-view {
  max-width: 720px;
  margin: 3rem auto;
  color: var(--text-primary, #222);
  font-size: 1.1rem;
  line-height: 1.7;
  padding: 0 1rem;
}

.about-view h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color, #667eea);
  text-shadow: 1px 1px 3px rgba(102, 126, 234, 0.5);
}

.about-view p {
  margin-bottom: 1.2rem;
  color: var(--text-secondary, #555);
}
</style>
