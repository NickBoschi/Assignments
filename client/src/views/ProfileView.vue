<script lang="ts">

let id = 0

export default {
  data() {
    return {
      users: [
        { first: 'Nick', last: 'Boschi', email: 'boschin1@newplatz.edu', isAdmin: true },
        { first: 'Moshe', last: 'Plotkin', email: 'plotkinm@newplatz.edu', isAdmin: false },
        { first: 'User', last: '3', email: 'user3@newplatz.edu', isAdmin: false }
      ]
    }
  },
  methods: {
  }
}
</script>

<template>
    <h1 class="title">Users</h1>

    <table class="table is-bordered is-fullwidth is-hoverable">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Is Admin</th>
        </tr>
        <tr v-for="user in users" :key="user.first">
            <td>{{ user.first }}</td>
            <td>{{ user.last }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.isAdmin }}</td>
            <td>
                <button>Edit</button>
            </td>
        </tr>
    </table>
</template>