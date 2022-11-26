<!-- <script setup lang="ts">
  import { ref } from 'vue'
  import session, { login, logout } from '../stores/session'


  const isToggle = ref(false)

  function toggle() {
    isToggle.value = !isToggle.value
  }

</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <button class="button is-primary">
            <strong>Sign Up</strong>
        </button>

        <div class="dropdown is-active">
          <div class="dropdown-trigger">
            <button class="button" @click="toggle" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Log In</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div v-if="isToggle" class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a class="dropdown-item" @click="login('Nick', 'Boschi')">Nick</a>
              <a class="dropdown-item" @click="login('Moshe', 'Plotkin')">Moshe</a>
              <a class="dropdown-item" @click="login('User', '3')">User 3</a>
            </div>
          </div>
        </div>


    </div>
    <div v-else>
        Welcome {{session.user.firstName}} {{session.user.lastName}}
        (<a @click="logout()">
            Log Out
        </a>)
    </div>
</template> -->

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import session, { login, logout } from '../stores/session'

</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <RouterLink class="button is-light" to="login">
            Log in
        </RouterLink>
    </div>
    <div v-else>
        Welcome {{session.user.name}} {{session.user.email}}
        (<a @click="logout()">
            Log out
        </a>)
    </div>

</template>

<style>

</style>