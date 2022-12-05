<script setup lang="ts">
    import { login } from '@/stores/session';
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
import ActivityView from './ActivityView.vue';

    const name = ref('');
    const email = ref('');
    const password = ref('');

</script>

<template> 
    <h1 class="title">Please Sign In to Continue</h1>
    <div>
        <form class="box" @submit.prevent="login(name, email, password)">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="John Smith" v-model="name">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="john@smith.com" v-model="email">
                </div>
            </div>

            <div class="field">
                 <label class="label">Password</label>
                 <div class="control">
                 <input class="input" type="password" placeholder="John's Password" v-model="password">
                 </div>
             </div>

             <RouterLink :to="{ path: '/activity' }" class="button is-primary">Sign in</RouterLink>
        </form>
    </div>
</template>

<style scoped>
    .title {
        margin-top: 20px;
    }

</style>