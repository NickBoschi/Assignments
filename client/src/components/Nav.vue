<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import LoginBadge from './LoginBadge.vue';

  let isActive = ref(false);
</script>

<template>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">

      <div class="container">

        <div class="navbar-brand">
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              Home
            </router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <LoginBadge></LoginBadge>
            </div>
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" target="_blank" 
              href="https://twitter.com/intent/tweet?text=I did a workout! Good for me!">
              <span class="icon"><i class="fab fa-twitter"></i></span><span> Tweet </span></a>
          </div>
        </div>
      </div>
    </nav>
</template>

<style>
  .bd-tw-button {
    margin: auto;
  }
</style>