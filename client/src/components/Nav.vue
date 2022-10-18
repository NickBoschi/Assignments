<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import LoginBadge from './LoginBadge.vue';

  let isActive = ref(false);
</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">

      <div class="container">

        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>
      
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
      
            <router-link to="" class="navbar-item">
              Recent
            </router-link>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <router-link to="/about" class="navbar-item">
                  About
                </router-link>

                <router-link to="" class="navbar-item">
                  History
                </router-link>

                <router-link to="" class="navbar-item">
                  Friends
                </router-link>
                
                <hr class="navbar-divider">
                <router-link to="" class="navbar-item">
                  Profile
                </router-link>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <LoginBadge></LoginBadge>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>