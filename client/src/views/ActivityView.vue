<script setup lang="ts">
    import { computed, reactive, ref, watch } from "vue";
    import { RouterLink } from "vue-router";
    import { getWorkouts, removeWorkout, addWorkout, type Workout } from "../stores/workouts";
    import { isLoading } from "@/stores/session";

    
    let workouts = reactive([] as Workout[]);
    let description = ref('');
    //let description = '';
    let duration = ref(0);
    let date = ref('');
    let type = ref('');
    getWorkouts().then(x => workouts.push(...x.workouts));


    function add() {
        const n = (Math.max(...workouts.map(o=>o.id))) + 1;
        console.log(n);
        console.log(description);
        addWorkout(n, description.value, duration.value, date.value, type.value)
        .then (() => {
            window.location.reload();
        });
        //addWorkout(n, description, duration, date, type);
        //window.location.reload();
    }
    function remove(w) {
        //workouts = workouts.filter((t) => t !== w);
        removeWorkout(w.id)
        .then (() => {
            window.location.reload();
        });
        //window.location.reload();
        //console.log(workouts);
        //getWorkouts().then(x => workouts.push(...x.workouts));
    }

    function modalToggle() {
        var x = document.getElementById("modal");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
    }

</script>

<template>
    <h1 class="title" id="title">My Workouts</h1>

    <div id="modal" class="modal is-active" style="display:none">
        <div class="modal-background" @click="modalToggle"></div>
        <div class="modal-card">

            <header class="modal-card-head">
                <p class="modal-card-title">Add a new workout</p>
                <button class="delete is-left" @click="modalToggle" aria-label="close"></button>
            </header>

            <section class="modal-card-body">
              <form @submit.prevent="add" id="workform">

                <label for="desc" class="label">Description</label>
                <input class="input" name="desc" v-model="description" placeholder="Workout Name"><br><br>

                <label for="dur" class="label">Duration</label>
                <input class="input" type="number" name="dur" v-model="duration"><br><br>

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





        <!-- <div>
            <div v-for="workout in workouts" :key="workout.id">
                <div>
                    <p>Description: {{ workout.description }}</p>
                    <p>Duration: {{ workout.duration }}</p>
                </div>
            </div>
        </div>
        <span>end</span> -->

        <table class="table">
        <tr class="title_row">
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Type</th>
            <th>Edit</th>
        </tr>
        <tr class="rows" v-for="workout in workouts" :key="workout.id">
            <td>{{ workout.description }}</td>
            <td>{{ workout.duration }} min</td>
            <td>{{ workout.date }}</td>
            <td>{{ workout.type }}</td>
            <td>
              <button @click="remove(workout)">X</button>
            </td>
        </tr>
    </table>

    <div class="button_div">
        <button class="button is-primary is-offset-8 is-rounded" id="button" @click="modalToggle()">Add new workout</button>
    </div>


</template>


<style scoped>

    /* .modal {
        display: none;
    } */
    .title {
        text-align: center;
        font-size: 5em;
    }
    .table {
        width: 1000px;
        height: 200px;
        margin-left: auto;
        margin-right: auto;

    }
    .table th {
        font-size: 1.2em;
    }
    .title_row {
        background-color: #519cff53;
    }
    .rows:nth-child(odd) {
        background-color: #f6f6f6;
    }
    .rows td {
        font-size: 1.1em;
    }
    .button_div {
        margin-left: 13%;
    }
    .workouts {
        display: flex;
        flex-wrap: wrap;
        background-color: aliceblue;
    }

    .workout {
        flex-basis: 10em;
        margin: 1em;
        padding: 1em;
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;
    }

    .workout-info {
        font-size: small;
    }

    .add {
        float: right;
    }

    .is-disabled {
        pointer-events: none;
        opacity: .7;
    }

</style>