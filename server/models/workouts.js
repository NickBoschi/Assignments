const data = require('../data/workouts.json');
const { connect } = require('./mongo');
const { ObjectId } = require('mongodb');

const COLLECTION_NAME = 'workouts';

async function collection() {
    const client = await connect();
    return client.db('FinalProject').collection(COLLECTION_NAME);
}

async function getWorkouts() {
    const db = await collection();
    const data = await db.find().toArray();
    return {workouts:data, total:100, skip:0, limit:30};
}

async function getWorkout(id) {
    console.log(id);
    const db = await collection();
    const data = await db.findOne({ id: id });
    return data;
}

async function addWorkout(id, desc, dur, date, type) {
    const db = await collection();
    await db.insertOne({ id: id, description: desc, duration: dur, date: date, type: type });
    //"description": desc, "duration": dur, "date": date, "type": type });
    return 'success';
}

async function removeWorkout(id) {
    const db = await collection();
    await db.deleteOne({ id: id });
    return 'success';
}

async function seed() {
    const db = await collection();
    db.insertMany(data.workouts);
    return 'success';
}

module.exports = {
    COLLECTION_NAME,
    collection,
    getWorkouts,
    getWorkout,
    addWorkout,
    removeWorkout,
    seed
}