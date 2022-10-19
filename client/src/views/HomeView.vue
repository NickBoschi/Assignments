<script lang="ts">

let id = 0

export default {
  data() {
    return {
      newWorkout: '',
      workouts: [
        { id: id++, text: 'Workout 1' },
        { id: id++, text: 'Workout 2' },
        { id: id++, text: 'Workout 3' }
      ]
    }
  },
  methods: {
    addWorkout() {
      this.workouts.push({ id: id++, text: this.newWorkout })
      this.newWorkout = ''
    },
    removeWorkout(workout: any) {
      this.workouts = this.workouts.filter((t) => t !== workout)
    }
  }
}
</script>

<template>
  <form @submit.prevent="addWorkout">
    <input v-model="newWorkout">
    <button>Add Workout</button>
  </form>

  <ul>
    <li v-for="workout in workouts" :key="workout.id">
      {{ workout.text }}
      <button @click="removeWorkout(workout)">X</button>
    </li>
  </ul>
</template>
