<template>
  <div class="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
    <!-- Background Pattern (simplified) -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background:
            radial-gradient(circle at 25% 25%, #9c92ac 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #9c92ac 2px, transparent 2px);
          background-size: 60px 60px;
        "
      ></div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl px-6 text-center">
      <!-- Hero Section -->
      <div class="mb-16">
        <h1 class="mb-6 text-5xl leading-tight font-bold text-white md:text-7xl">
          Domine
          <span
            class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            JavaScript
          </span>
          <br />
          do Zero ao Pro
        </h1>

        <p class="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
          Transforme sua carreira com o curso mais completo de JavaScript. Aprenda através de
          projetos reais, exercícios práticos e uma metodologia que realmente funciona.
        </p>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <router-link
            to="/modules"
            class="group inline-flex transform items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-blue-500/25"
          >
            <Play class="h-6 w-6 transition-transform group-hover:scale-110" />
            Começar Agora
            <ArrowRight class="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </router-link>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          class="group transform rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
        >
          <div
            class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 transition-transform group-hover:scale-110"
          >
            <Target class="h-8 w-8 text-white" />
          </div>
          <h3 class="mb-3 text-xl font-bold text-white">Aprendizado Prático</h3>
          <p class="leading-relaxed text-gray-300">
            Exercícios hands-on e projetos reais que preparam você para o mercado de trabalho.
          </p>
        </div>

        <div
          class="group transform rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
        >
          <div
            class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 transition-transform group-hover:scale-110"
          >
            <TrendingUp class="h-8 w-8 text-white" />
          </div>
          <h3 class="mb-3 text-xl font-bold text-white">Progressão Estruturada</h3>
          <p class="leading-relaxed text-gray-300">
            Metodologia pensada para levar você do básico ao avançado de forma gradual e eficiente.
          </p>
        </div>

        <div
          class="group transform rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
        >
          <div
            class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 transition-transform group-hover:scale-110"
          >
            <Award class="h-8 w-8 text-white" />
          </div>
          <h3 class="mb-3 text-xl font-bold text-white">Sistema Gamificado</h3>
          <p class="leading-relaxed text-gray-300">
            Conquiste badges, acompanhe seu progresso e mantenha-se motivado durante toda a jornada.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Play, ArrowRight, Target, TrendingUp, Award } from 'lucide-vue-next'
</script>
