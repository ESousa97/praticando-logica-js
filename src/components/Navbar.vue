<template>
  <nav class="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Code class="w-6 h-6 text-white" />
          </div>
          <span class="text-xl font-bold text-gray-800">JavaScript Pro</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <div v-for="item in navItems" :key="item.name" 
               @click="$router.push({ name: item.name })"
               :class="[
                 'flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm',
                 $route.name === item.name 
                   ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-200' 
                   : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
               ]">
            <component :is="item.icon" class="w-4 h-4" />
            <span>{{ item.label }}</span>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" 
                  class="text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-100 py-4 space-y-2">
        <div v-for="item in navItems" :key="item.name" 
             @click="$router.push({ name: item.name }); mobileMenuOpen = false"
             :class="[
               'flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200',
               $route.name === item.name 
                 ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                 : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
             ]">
          <component :is="item.icon" class="w-5 h-5" />
          <span class="font-medium">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Home, BookOpen, Info, Code, Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', label: 'Início', icon: Home },
  { name: 'Modules', label: 'Módulos', icon: BookOpen },
  { name: 'About', label: 'Sobre', icon: Info }
]
</script>
