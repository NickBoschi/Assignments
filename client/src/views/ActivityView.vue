<script lang="ts">

let id = 0

export default {
  data() {
    return {
      description: '',
      duration: '',
      date: '',
      type: '',
      workouts: [
        { id: id++, desc: 'Workout 1', dur: '12 min', date: '2022-10-8', type: 'Run' },
        { id: id++, desc: 'Workout 2', dur: '18 hr', date: '2222-44-66', type: 'Cardio' },
        { id: id++, desc: 'Workout 3', dur: '2 sec', date: '0101-01-01', type: 'Aerobic' }
      ]
    }
  },
  methods: {
    addWorkout() {
      this.workouts.push({ id: id++, desc: this.description, dur: this.duration, date: this.date, type: this.type })
      this.description = ''
      this.duration = ''
      this.date = ''
      this.type = ''
    },
    removeWorkout(workout: any) {
      this.workouts = this.workouts.filter((t) => t !== workout)
    }
  }
}
</script>

<template>
    <h1 class="title">My Workouts</h1>

    <h2 class="subtitle">Add a new workout</h2>
    <form @submit.prevent="addWorkout">
        <label for="desc">Description</label><br>
        <input name="desc" v-model="description"><br><br>

        <label for="dur">Duration</label><br>
        <input name="dur" v-model="duration"><br><br>

        <label for="date">Date</label><br>
        <input type="date" v-model="date"><br><br>

        <label for="type">Type</label><br>
        <select name="type" v-model="type">
            <option value="Walk">Walk</option>
            <option value="Run">Run</option>
            <option value="Cardio">Cardio</option>
            <option value="Aerobic">Aerobic</option>
            <option value="Yoga">Yoga</option>
        </select><br><br>
    <button>Submit</button>
    </form>

    <table class="table">
        <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Type</th>
        </tr>
        <tr v-for="workout in workouts" :key="workout.id">
            <td>{{ workout.id }}</td>
            <td>{{ workout.desc }}</td>
            <td>{{ workout.dur }}</td>
            <td>{{ workout.date }}</td>
            <td>{{ workout.type }}</td>
        </tr>
    </table>
</template>