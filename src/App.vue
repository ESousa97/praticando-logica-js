<template>
  <div id="app" class="flex min-h-screen flex-col">
    <Navbar />
    <main class="container mx-auto flex-grow py-8">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
