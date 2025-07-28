// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ModuleView from '../views/ModuleView.vue'
import LessonView from '../views/LessonView.vue'
import AchievementsView from '../views/AchievementsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/module/:moduleId',
    name: 'Module',
    component: ModuleView,
    props: true
  },
  {
    path: '/module/:moduleId/lesson/:lessonId',
    name: 'Lesson',
    component: LessonView,
    props: true
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: AchievementsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
