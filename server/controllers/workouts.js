const express = require('express');
const workouts = require('../models/workouts.js');

const app = express.Router();

app
    .get('/', (req, res, next) => {
        workouts.getWorkouts()
        .then(x => res.status(200).send(x))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        console.log(req.params.id);
        workouts.getWorkout(+req.params.id)
        .then(workout => {
            if (workout) {
                res.status(200).send(workout);
            } else {
                res.status(404).send('Workout not found ' + req.params.id);
            }
        }) 
        .catch(next);
    })
    .get('/remove/:id', (req, res, next) => {
        workouts.removeWorkout(+req.params.id)
        .then(workout => {
            if (workout == 'success') {
                res.status(200).send(true);
            } else {
                res.status(404).send('Could not delete');
            }
        })
        .catch(next)
    })
    .get('/add/:id/:desc/:dur/:date/:type', (req, res, next) => {
        workouts.addWorkout(+req.params.id, req.params.desc, +req.params.dur, req.params.date, req.params.type)
        .then(added => {
            if (added == 'success') {
                res.status(200).send(true);
            } else {
                res.status(404).send('Could not add');
            }
        })
        .catch(next)
    })
    .post('/seed', (req, res, next) => {
        workouts.seed()
        .then(x => res.status(200).send(x))
        .catch(next);
    });


module.exports = app;