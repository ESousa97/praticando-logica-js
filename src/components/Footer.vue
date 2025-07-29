<template>
  <footer class="bg-gray-900 text-gray-300 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code class="w-6 h-6 text-white" />
            </div>
            <span class="text-xl font-bold text-white">JavaScript Pro</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
            Transformando iniciantes em desenvolvedores JavaScript profissionais através de uma metodologia prática e moderna.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold text-lg">Links Rápidos</h3>
          <div class="space-y-2">
            <router-link v-for="item in quickLinks" :key="item.name"
                         :to="{ name: item.name }"
                         class="block text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform">
              {{ item.label }}
            </router-link>
          </div>
        </div>

        <!-- Contact & Social -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold text-lg">Conecte-se</h3>
          <div class="space-y-3">
            <p class="text-gray-400 text-sm">
              Desenvolvido com ❤️ por <span class="text-white font-semibold">Enoque Sousa</span>
            </p>
            <div class="flex space-x-3">
              <a v-for="link in socialLinks" :key="link.label"
                 :href="link.url" target="_blank" rel="noopener noreferrer"
                 :aria-label="link.label"
                 class="group bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <component :is="link.icon" class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 py-6">
        <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div class="flex items-center space-x-4 text-sm text-gray-400">
            <span>© 2025 JavaScript Pro. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Github, Linkedin, Code } from 'lucide-vue-next'

const socialLinks = [
  { 
    label: 'GitHub', 
    url: 'https://github.com/ESousa97', 
    icon: Github 
  },
  { 
    label: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/enoque-sousa-bb89aa168/', 
    icon: Linkedin 
  }
]

const quickLinks = [
  { name: 'Home', label: 'Início' },
  { name: 'Modules', label: 'Módulos' },
  { name: 'About', label: 'Sobre o Curso' }
]
</script>
