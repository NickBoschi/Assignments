<script lang="js">

let id = 0

export default {
  data() {
    return {
      description: '',
      duration: '',
      date: '',
      type: '',
      workouts: [
        { id: id++, desc: 'Workout 1', dur: '47 min', date: '2022-10-8', type: 'Run' },
        { id: id++, desc: 'Workout 2', dur: '18 hr', date: '2022-10-12', type: 'Cardio' },
        { id: id++, desc: 'Workout 3', dur: '2 sec', date: '2022-10-18', type: 'Aerobic' }
      ],
      showModal: false
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
    removeWorkout(workout) {
      this.workouts = this.workouts.filter((t) => t !== workout)
    },
    modalToggle() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<template>
    <h1 class="title">My Workouts</h1>

    <div v-if="showModal" id="modal" class="modal is-active">
        <div class="modal-background" @click="modalToggle"></div>
        <div class="modal-card">

            <header class="modal-card-head">
                <p class="modal-card-title">Add a new workout</p>
                <button class="delete is-left" @click="modalToggle" aria-label="close"></button>
            </header>

            <section class="modal-card-body">
              <form @submit.prevent="addWorkout" id="workform">

                <label for="desc" class="label">Description</label>
                <input class="input" name="desc" v-model="description"><br><br>

                <label for="dur" class="label">Duration</label>
                <input class="input" name="dur" v-model="duration"><br><br>

                <label for="date" class="label">Date</label>
                <input class="input" type="date" v-model="date"><br><br>

                <label for="type" class="label">Type</label>
                <select class="input" name="type" v-model="type">
                  <option value="Walk">Walk</option>
                  <option value="Run">Run</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Aerobic">Aerobic</option>
                  <option value="Yoga">Yoga</option>
                </select><br><br>
              </form>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" type="submit" form="workform">Save changes</button>
                <button class="button" @click="modalToggle">Exit</button>
            </footer>
        </div>
    </div>

    <table class="table">
        <tr>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Type</th>
            <th>Edit</th>
        </tr>
        <tr v-for="workout in workouts" :key="workout.id">
            <td>{{ workout.desc }}</td>
            <td>{{ workout.dur }}</td>
            <td>{{ workout.date }}</td>
            <td>{{ workout.type }}</td>
            <td>
              <button @click="removeWorkout(workout)">X</button>
            </td>
        </tr>
    </table>

    <button class="button is-primary" id="button" @click="modalToggle">Add new workout</button>

</template>

<style>
  .title {
    padding: 25px 5px 0px 5px;
  }
</style>