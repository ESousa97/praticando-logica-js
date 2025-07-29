import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ModulesView from "../views/ModulesView.vue";
import AboutView from "../views/AboutView.vue";
import LessonView from "../views/LessonView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/modules", name: "Modules", component: ModulesView },
  { path: "/about", name: "About", component: AboutView },
  {
    path: "/lesson/:moduleId/:lessonId",
    name: "Lesson",
    component: LessonView,
    props: true,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
