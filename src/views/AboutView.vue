<template>
  <div class="max-w-4xl mx-auto px-6">
    <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div class="bg-gradient-to-r from-primary-500 to-purple-600 text-white p-8">
        <h1 class="text-4xl font-bold mb-2">Sobre o Curso</h1>
        <p class="text-xl opacity-90">Conheça nossa metodologia e objetivos</p>
      </div>
      
      <div class="p-8 space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Target class="w-6 h-6 text-primary-500" />
                Nossa Missão
              </h2>
              <p class="text-gray-700 leading-relaxed">
                A Jornada JavaScript é um curso estruturado que guia o aluno desde os conceitos básicos 
                até desafios avançados de programação. Nosso objetivo é proporcionar uma aprendizagem 
                prática, eficiente e motivadora.
              </p>
            </div>
            
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Users class="w-6 h-6 text-primary-500" />
                Para Quem é Este Curso
              </h2>
              <p class="text-gray-700 leading-relaxed">
                Desenvolvido para iniciantes e programadores que desejam aprimorar suas habilidades. 
                Abordamos os principais tópicos de JavaScript com didática clara e exemplos reais.
              </p>
            </div>
          </div>
          
          <div class="space-y-6">
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <BookOpen class="w-6 h-6 text-primary-500" />
                Metodologia
              </h2>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center gap-2">
                  <CheckCircle class="w-4 h-4 text-green-500" />
                  Exercícios interativos e práticos
                </li>
                <li class="flex items-center gap-2">
                  <CheckCircle class="w-4 h-4 text-green-500" />
                  Acompanhamento de progresso
                </li>
                <li class="flex items-center gap-2">
                  <CheckCircle class="w-4 h-4 text-green-500" />
                  Feedback imediato
                </li>
                <li class="flex items-center gap-2">
                  <CheckCircle class="w-4 h-4 text-green-500" />
                  Projetos reais
                </li>
              </ul>
            </div>
            
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Trophy class="w-6 h-6 text-primary-500" />
                Resultados
              </h2>
              <p class="text-gray-700 leading-relaxed">
                Ao final do curso, você terá domínio dos conceitos fundamentais do JavaScript 
                e estará preparado para criar suas próprias aplicações web.
              </p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
          <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">
            🚀 Comece Sua Jornada Hoje!
          </h3>
          <p class="text-gray-700 text-center mb-4">
            Junte-se a milhares de desenvolvedores que já transformaram suas carreiras com JavaScript.
          </p>
          <div class="text-center">
            <router-link to="/modules" 
                         class="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all">
              Começar Agora
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Target, Users, BookOpen, Trophy, CheckCircle, ArrowRight } from 'lucide-vue-next'
</script>
