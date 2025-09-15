<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <nav>
        <router-link to="/student">Student</router-link>
        <router-link to="/admin">Admin</router-link>
    </nav>

    <router-view></router-view>

  
</template>

<style scoped>

</style>
