<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <nav class="nav">
        <router-link to="/student">Student</router-link>
        <router-link to="/admin">Admin</router-link>
    </nav>

    <router-view></router-view>

  
</template>

<style scoped>
    .nav {
  display: flex;
  justify-content: center; 
  gap: 2rem; 
  padding: 1rem;
  background-color: #f4f4f4; 
  border-bottom: 1px solid #ddd; 
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav a.router-link-active {
  color: #007bff; 
  font-weight: bold;
}
</style>
