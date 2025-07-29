<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li :class="{ active: isActive('Home') }" @click="goTo('Home')" class="nav-item">
        <HomeIcon class="nav-icon" /> Início
      </li>
      <li :class="{ active: isActive('Modules') }" @click="goTo('Modules')" class="nav-item">
        <BookOpenIcon class="nav-icon" /> Módulos
      </li>
      <li :class="{ active: isActive('About') }" @click="goTo('About')" class="nav-item">
        <InfoIcon class="nav-icon" /> Sobre
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { HomeIcon, BookOpenIcon, InfoIcon } from "lucide-vue-next";

export default {
  name: "Navbar",
  components: {
    HomeIcon,
    BookOpenIcon,
    InfoIcon,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const goTo = (name) => {
      router.push({ name });
    };

    const isActive = (name) => {
      return route.name === name;
    };

    return { goTo, isActive };
  },
};
</script>

<style scoped>
.navbar {
  background: var(--primary-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
  padding: 0.75rem 2rem;
  box-shadow: var(--shadow-lg, 0 8px 24px rgba(0,0,0,0.2));
  border-radius: var(--border-radius-lg, 20px);
  margin-bottom: 2rem;
  user-select: none;
}

.nav-list {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: rgba(255,255,255,0.8);
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm, 6px);
  transition: background-color 0.3s ease, color 0.3s ease;
  position: relative;
}

.nav-item:hover {
  color: white;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 10px #ffffff88;
}

.nav-icon {
  width: 22px;
  height: 22px;
  stroke-width: 2.2;
  transition: stroke 0.3s ease;
}

.nav-item.active {
  background: white;
  color: var(--primary-color, #667eea);
  box-shadow: 0 0 10px var(--primary-color, #667eea);
}

.nav-item.active .nav-icon {
  stroke: var(--primary-color, #667eea);
}

@media (max-width: 600px) {
  .nav-list {
    flex-direction: column;
    gap: 1rem;
  }
  .navbar {
    border-radius: 0;
    padding: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
