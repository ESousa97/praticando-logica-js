<template>
  <footer class="mt-auto bg-gray-900 text-gray-300">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
        <!-- Brand Section -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
            >
              <Code class="h-6 w-6 text-white" />
            </div>
            <span class="text-xl font-bold text-white">JavaScript Pro</span>
          </div>
          <p class="max-w-xs text-sm leading-relaxed text-gray-400">
            Transformando iniciantes em desenvolvedores JavaScript profissionais através de uma
            metodologia prática e moderna.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Links Rápidos</h3>
          <div class="space-y-2">
            <router-link
              v-for="item in quickLinks"
              :key="item.name"
              :to="{ name: item.name }"
              class="block transform text-sm text-gray-400 transition-colors duration-200 hover:translate-x-1 hover:text-white"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>

        <!-- Contact & Social -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Conecte-se</h3>
          <div class="space-y-3">
            <p class="text-sm text-gray-400">
              Desenvolvido com ❤️ por
              <span class="font-semibold text-white">Enoque Sousa</span>
            </p>
            <div class="flex space-x-3">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="link.label"
                class="group transform rounded-lg bg-gray-800 p-3 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600"
              >
                <component
                  :is="link.icon"
                  class="h-5 w-5 text-gray-400 transition-colors group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 py-6">
        <div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div class="flex items-center space-x-4 text-sm text-gray-400">
            <span>© {{ currentYear }} JavaScript Pro. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Github, Linkedin, Code } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/ESousa97',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/enoque-sousa-bb89aa168/',
    icon: Linkedin,
  },
]

const quickLinks = [
  { name: 'Home', label: 'Início' },
  { name: 'Modules', label: 'Módulos' },
  { name: 'About', label: 'Sobre o Curso' },
]
</script>
