<script setup>
import { RouterLink } from 'vue-router'
import Logo from './Logo.vue'
</script>

<template>
  <header>
    <Logo />

    <nav>
      <RouterLink to="/login" class="login">Login</RouterLink>
      <RouterLink to="/signup" class="signup">Signup</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10% 10px 10%;

  nav {
    display: flex;
    flex-wrap: wrap;

    .login,
    .signup {
      text-decoration: none;
      font-size: 11px;
      background-color: #7848f4;
      color: white;
      padding: 8px 24px;
      margin-left: 10px;
      border-radius: 4px;
    }

    .login {
      background-color: white;
      color: black;
    }

  }
}


</style>
