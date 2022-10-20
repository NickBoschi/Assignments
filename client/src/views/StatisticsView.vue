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

    <button class="button modal-button" data-target="modal" aria-haspopup="true">Add new workout</button>
    <div id="modal" class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-header">
                <p class="modal-card-title">Add a new workout</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">

            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
            </footer>
        </div>
    </div>

    
</template>