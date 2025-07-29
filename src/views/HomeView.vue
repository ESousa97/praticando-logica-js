<template>
  <div class="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
    <!-- Background Pattern (simplified) -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background: radial-gradient(circle at 25% 25%, #9C92AC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #9C92AC 2px, transparent 2px); background-size: 60px 60px;"></div>
    </div>
    
    <div class="relative z-10 text-center max-w-6xl mx-auto px-6">
      <!-- Hero Section -->
      <div class="mb-16">
        
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Domine
          <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> JavaScript</span>
          <br />do Zero ao Pro
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Transforme sua carreira com o curso mais completo de JavaScript. Aprenda através de projetos reais, 
          exercícios práticos e uma metodologia que realmente funciona.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <router-link to="/modules" 
                       class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
            <Play class="w-6 h-6 group-hover:scale-110 transition-transform" />
            Começar Agora
            <ArrowRight class="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </router-link>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Target class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Aprendizado Prático</h3>
          <p class="text-gray-300 leading-relaxed">Exercícios hands-on e projetos reais que preparam você para o mercado de trabalho.</p>
        </div>
        
        <div class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <TrendingUp class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Progressão Estruturada</h3>
          <p class="text-gray-300 leading-relaxed">Metodologia pensada para levar você do básico ao avançado de forma gradual e eficiente.</p>
        </div>
        
        <div class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
          <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Award class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Sistema Gamificado</h3>
          <p class="text-gray-300 leading-relaxed">Conquiste badges, acompanhe seu progresso e mantenha-se motivado durante toda a jornada.</p>
        </div>
      </div>

      <!-- Stats Section -->

        </div>
      </div>
</template>

<script setup>
import { 
  Play, 
  ArrowRight, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Award, 
  Sparkles 
} from 'lucide-vue-next'
</script>
