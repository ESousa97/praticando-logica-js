<template>
  <div class="mx-auto max-w-4xl px-6">
    <div class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
      <div class="from-primary-500 bg-gradient-to-r to-purple-600 p-8 text-white">
        <h1 class="mb-2 text-4xl font-bold">Sobre o Curso</h1>
        <p class="text-xl opacity-90">Conheça nossa metodologia e objetivos</p>
      </div>

      <div class="space-y-8 p-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="space-y-6">
            <div>
              <h2 class="mb-3 flex items-center gap-2 text-2xl font-bold text-gray-800">
                <Target class="text-primary-500 h-6 w-6" />
                Nossa Missão
              </h2>
              <p class="leading-relaxed text-gray-700">
                A Jornada JavaScript é um curso estruturado que guia o aluno desde os conceitos
                básicos até desafios avançados de programação. Nosso objetivo é proporcionar uma
                aprendizagem prática, eficiente e motivadora.
              </p>
            </div>

            <div>
              <h2 class="mb-3 flex items-center gap-2 text-2xl font-bold text-gray-800">
                <Users class="text-primary-500 h-6 w-6" />
                Para Quem é Este Curso
              </h2>
              <p class="leading-relaxed text-gray-700">
                Desenvolvido para iniciantes e programadores que desejam aprimorar suas habilidades.
                Abordamos os principais tópicos de JavaScript com didática clara e exemplos reais.
              </p>
            </div>
          </div>

          <div class="space-y-6">
            <div>
              <h2 class="mb-3 flex items-center gap-2 text-2xl font-bold text-gray-800">
                <BookOpen class="text-primary-500 h-6 w-6" />
                Metodologia
              </h2>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center gap-2">
                  <CheckCircle class="h-4 w-4 text-green-500" />
                  Exercícios interativos e práticos
                </li>
                <li class="flex items-center gap-2">
                  <CheckCircle class="h-4 w-4 text-green-500" />
                  Acompanhamento de progresso
                </li>
                <li class="flex items-center gap-2">
                  <CheckCircle class="h-4 w-4 text-green-500" />
                  Feedback imediato
                </li>
                <li class="flex items-center gap-2">
                  <CheckCircle class="h-4 w-4 text-green-500" />
                  Projetos reais
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-3 flex items-center gap-2 text-2xl font-bold text-gray-800">
                <Trophy class="text-primary-500 h-6 w-6" />
                Resultados
              </h2>
              <p class="leading-relaxed text-gray-700">
                Ao final do curso, você terá domínio dos conceitos fundamentais do JavaScript e
                estará preparado para criar suas próprias aplicações web.
              </p>
            </div>
          </div>
        </div>

        <div
          class="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-6"
        >
          <h3 class="mb-3 text-center text-xl font-bold text-gray-800">
            🚀 Comece Sua Jornada Hoje!
          </h3>
          <p class="mb-4 text-center text-gray-700">
            Junte-se a milhares de desenvolvedores que já transformaram suas carreiras com
            JavaScript.
          </p>
          <div class="text-center">
            <router-link
              to="/modules"
              class="bg-primary-500 hover:bg-primary-600 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all"
            >
              Começar Agora
              <ArrowRight class="h-4 w-4" />
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
