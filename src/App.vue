<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
  background: #f7f9fc;
  padding: 0;
  margin: 0 auto;
  max-width: 960px;
}

.main-content {
  flex-grow: 1;
  padding: 1.5rem 2rem;
}

/* Footer sem box shadow, minimalista */
footer {
  background: transparent;
  color: #555;
  text-align: center;
  padding: 1.25rem 0;
  font-weight: 500;
  font-size: 0.95rem;
  border-top: 1px solid #ddd;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Links no footer */
footer a {
  color: #555;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #667eea;
}

/* Ícones dos links */
footer svg {
  width: 18px;
  height: 18px;
  stroke-width: 1.5;
  transition: stroke 0.3s ease;
}

/* Ajuste responsivo */
@media (max-width: 480px) {
  footer {
    font-size: 0.85rem;
    gap: 0.5rem;
  }
}
</style>
