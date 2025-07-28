// src/views/Home.vue
<template>
  <div class="home">
    <AppHeader />
    
    <main class="main-content">
      <NavigationTabs 
        :current-tab="currentTab" 
        @tab-change="currentTab = $event" 
      />

      <div class="content-area">
        <ModulesGrid 
          v-if="currentTab === 'modules'"
          :modules="availableModules"
          @module-select="goToModule"
        />
        
        <PracticeArea 
          v-else-if="currentTab === 'practice'"
        />
        
        <AchievementsDisplay 
          v-else-if="currentTab === 'achievements'"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { useUserProgressStore } from '../stores/userProgress'
import { useModulesStore } from '../stores/modules'
import AppHeader from '../components/AppHeader.vue'
import NavigationTabs from '../components/NavigationTabs.vue'
import ModulesGrid from '../components/ModulesGrid.vue'
import PracticeArea from '../components/PracticeArea.vue'
import AchievementsDisplay from '../components/AchievementsDisplay.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    NavigationTabs,
    ModulesGrid,
    PracticeArea,
    AchievementsDisplay
  },
  
  setup() {
    const userProgress = useUserProgressStore()
    const modulesStore = useModulesStore()
    
    return {
      userProgress,
      modulesStore
    }
  },

  data() {
    return {
      currentTab: 'modules'
    }
  },

  computed: {
    availableModules() {
      return this.modulesStore.getUnlockedModules(this.userProgress.completedModules)
    }
  },

  methods: {
    goToModule(moduleId) {
      this.$router.push({ name: 'Module', params: { moduleId } })
    }
  }
}
</script>
