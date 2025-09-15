import { createRouter, createWebHistory } from 'vue-router'
import Student from '../view/Student.vue'
import Admin from '../view/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})

export default router