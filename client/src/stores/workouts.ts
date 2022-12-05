import { api } from "./session";

export function getWorkouts() {
    return api<ListEnvelope<Workout>>('workouts');
}

export function getWorkout(id: number) {
    return api<Workout>(`workouts/${id}`)
}

export function addWorkout(id: number, description: string, duration: number, date: string, type: string) {
    return api<Workout>(`workouts/add/${id}/${description}/${duration}/${date}/${type}`)
}
export function removeWorkout(id: number) {
    return api<Workout>(`workouts/remove/${id}`)
}

export interface ListEnvelope<T> {
    workouts: T[]
    total: number
    skip: number
    limit: number
}

export interface Workout {
    _id: string
    id: number
    description: string
    duration: number
    date: string
    type: string
}