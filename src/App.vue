<template>
  <div id="app">
    <header>
      <h1>Curso Básico de Programação</h1>
      <p>Aprenda do zero com exercícios práticos!</p>
    </header>

    <PracticeArea />
  </div>
</template>

<script>
import PracticeArea from "./components/PracticeArea.vue";

export default {
  name: "App",
  components: { PracticeArea },
};
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  color: #222;
  background: #f7f9fc;
}
header {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
