<template>
    <h1 class="title">Statistics page</h1>

    <!-- <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Conpatible" contents="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Workout Tracker with HTML, CSS, & JavaScript</title>
        <link rel="stylesheet" href="css/main.css">
    </head> -->
    <body>
        <div id="testw">
            <table class="tracker">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Workout</th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="tracker_entries">
                    <tr class="tracker_row">
                        <td>
                            <input type="date" class="tracker_date">
                        </td>
                        <td>
                            <select class="tracker_workout">
                                <option value="walking">Walking</option>
                                <option value="running">Running</option>
                                <option value="swimming">Swimming</option>
                                <option value="yoga">Yoga</option>
                            </select>
                        </td>
                        <td>
                            <input type="number" class="tracker_duration">
                            <span class="tracker_text">minutes</span>
                        </td>
                        <td>
                            <button type="button" class="tracker_button">&times;</button>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="tracker_row tracker_row_add">
                        <td colspan="4">
                            <span class="tracker_add">Add Entry &plus;</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</template>

<style>
    .tracker {
        font-size: 14px;
        border-collapse: collapse;
        width: 600px;
    }

    .tracker,
    .tracker * {
        font-family: sans-serif;
    }

    .tracker th {
        font-size: 1.15em;
        text-align: left;
        font-weight: normal;
        color: white;
        background: #009578;
    }

    .tracker th,
    .tracker td {
        padding: 0.75em;
    }

    .tracker_entries .tracker_row {
        background: #eeeeee;
    }

    .tracker_entries .tracker_row:nth-child(odd) {
        background: #dddddd;
    }

    .tracker_date,
    .tracker_workout,
    .tracker_duration {
        display: inline-block;
        box-sizing: border-box;
        font-size: 1em;
        height: 2.5em;
        padding: 0.5em 0;
        border: none;
        outline: none;
        background: none;
    }

    .tracker_duration {
        width: 5em;
        text-align: right;
    }

    .tracker_button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        border-radius: 50%;
        outline: none;
        color: red;
        font-size: 1.5em;
        margin-left: 0.5em;
        cursor: pointer;
    }

    .tracker_button:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    .tracker_row_add {
        border-top: 3px solid #333333;
        border-bottom: 3px solid #333333;
        background: #ffffff;
    }

    .tracker_row_add td {
        text-align: right;
    }

    .tracker_add {
        display: inline-block;
        padding: 0.8em 1em;
        color: green;
        cursor: pointer;
    }

    .tracker_add:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>

<script>

        class WorkoutTracker {
            static LOCAL_STORAGE_DATA_KEY = "workout-tracker-entries";

            constructor(root) {
                this.root = root;
                this.root.insertAdjacentHTML("afterbegin", WorkoutTracker.html());
                this.entries = [];

                this.loadEntries();
                this.updateView();

                this.root.querySelector(".tracker_add").addEventListener("click", () => {
                    const date = new Date();
                    const year = date.getFullYear();
                    const month = (date.getMonth() + 1).toString().padStart(2, "0");
                    const day = date.getDay().toString().padStart(2, "0");

                    this.addEntry({
                        date: `${ year }-${ month }-${ day }`,
                        workout: "walking",
                        duration: 30
                    })
                });
            }

            static html() {
                return `
                    <table class="tracker">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Workout</th>
                                <th>Duration</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody class="tracker_entries"></tbody>
                        <tbody>
                            <tr class="tracker_row tracker_row_add">
                                <td colspan="4">
                                    <span class="tracker_add">Add Entry &plus;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                `;
            }

            static rowHTML() {
                return `
                    <tr class="tracker_row">
                        <td>
                            <input type="date" class="tracker_date">
                        </td>
                        <td>
                            <select class="tracker_workout">
                                <option value="walking">Walking</option>
                                <option value="running">Running</option>
                                <option value="swimming">Swimming</option>
                                <option value="yoga">Yoga</option>
                            </select>
                        </td>
                        <td>
                            <input type="number" class="tracker_duration">
                            <span class="tracker_text">minutes</span>
                        </td>
                        <td>
                            <button type="button" class="tracker_button tracker_delete">&times;</button>
                        </td>
                    </tr>
                `;
            }

            loadEntries() {
                this.entries = JSON.parse(localStorage.getItem(WorkoutTracker.LOCAL_STORAGE_DATA_KEY) || "[]");
            }

            saveEntries() {
                localStorage.setItem(WorkoutTracker.LOCAL_STORAGE_DATA_KEY, JSON.stringify(this.entries));
            }

            updateView() {
                const tableBody = this.root.querySelector(".tracker_entries");
                const addRow = data => {
                    const template = document.createElement("template");
                    let row = null;

                    template.innerHTML = WorkoutTracker.rowHTML().trim();
                    row = template.content.firstElementChild;

                    row.querySelector(".tracker_date").value = data.date;
                    row.querySelector(".tracker_workout").value = data.workout;
                    row.querySelector(".tracker_duration").value = data.duration;

                    row.querySelector(".tracker_date").addEventListener("change", ({ target }) => {
                        data.date = target.value;
                        this.saveEntries();
                    });
                    row.querySelector(".tracker_workout").addEventListener("change", ({ target }) => {
                        data.workout = target.value;
                        this.saveEntries();
                    });
                    row.querySelector(".tracker_duration").addEventListener("change", ({ target }) => {
                        data.duration = target.value;
                        this.saveEntries();
                    });

                    row.querySelector(".tracker_delete").addEventListener("click", () => {
                        this.deleteEntry(data);
                    });

                    tableBody.appendChild(row);
                };

                tableBody.querySelectorAll(".tracker_row").forEach(row => {
                    row.remove();
                });

                this.entries.forEach(data => addRow(data));
            }

            addEntry(data) {
                this.entries.push(data);
                this.saveEntries();
                this.updateView();
            }

            deleteEntry(dataToDelete) {
                this.entries = this.entries.filter(data => data !== dataToDelete);
                this.saveEntries();
                this.updateView();
            }
        }

    async function mounted() {
        const testw = document.getElementById("testw");

        console.log(testw);

        // const wt = new WorkoutTracker(testw);

        // window.wt = wt;
    }

</script>