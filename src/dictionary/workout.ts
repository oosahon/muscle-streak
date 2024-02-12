export const workouts = [
  "Bench Press",
  "Squat",
  "Deadlift",
  "Overhead Press",
  "Barbell Row",
  "Pull-Up",
  "Dumbbell Curl",
  "Push-Up",
  "Lunge",
  "Dip",
];

type WorkoutCategory = (typeof workouts)[number];

export const me: WorkoutCategory = "s";
