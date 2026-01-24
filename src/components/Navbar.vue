<template>
  <nav class="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-lg backdrop-blur-md">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo/Brand -->
        <div class="flex items-center space-x-3">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
          >
            <Code class="h-6 w-6 text-white" />
          </div>
          <span class="text-xl font-bold text-gray-800">JavaScript Pro</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden items-center space-x-1 md:flex">
          <div
            v-for="item in navItems"
            :key="item.name"
            @click="$router.push({ name: item.name })"
            :class="[
              'flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
              $route.name === item.name
                ? 'border border-blue-200 bg-blue-50 text-blue-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600',
            ]"
          >
            <component :is="item.icon" class="h-4 w-4" />
            <span>{{ item.label }}</span>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600"
          >
            <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="space-y-2 border-t border-gray-100 py-4 md:hidden">
        <div
          v-for="item in navItems"
          :key="item.name"
          @click="navigateMobile(item.name)"
          :class="[
            'flex cursor-pointer items-center space-x-3 rounded-lg px-4 py-3 transition-all duration-200',
            $route.name === item.name
              ? 'border-l-4 border-blue-500 bg-blue-50 text-blue-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600',
          ]"
        >
          <component :is="item.icon" class="h-5 w-5" />
          <span class="font-medium">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Home, BookOpen, Info, Code, Menu, X } from 'lucide-vue-next'

const router = useRouter()
const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', label: 'Início', icon: Home },
  { name: 'Modules', label: 'Módulos', icon: BookOpen },
  { name: 'About', label: 'Sobre', icon: Info },
]

const navigateMobile = (itemName) => {
  router.push({ name: itemName })
  mobileMenuOpen.value = false
}
</script>
