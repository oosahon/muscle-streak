import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { WorkoutWeek } from "../../components/workouts/workout-week/WorkoutWeek";
import { WorkoutFormEmptyState } from "../../components/workouts/workout-form/EmptyState";
import { WorkoutForm } from "../../components/workouts/workout-form/WorkoutForm";
import { useState } from "react";

const WorkoutRoute = () => {
  const [showWorkoutForm, setShowWorkoutForm] = useState(false);

  const handleCloseWorkoutForm = () => {
    setShowWorkoutForm(false);
  };

  const handleAddNewWorkout = () => {
    setShowWorkoutForm(true);
  };

  return (
    <>
      <WorkoutWeek />
      <WorkoutForm open={showWorkoutForm} onClose={handleCloseWorkoutForm} />
      <Box display="flex" justifyContent="center" mt={5}>
        <Button startIcon={<Add />} onClick={handleAddNewWorkout}>
          Record a new workout
        </Button>
      </Box>
    </>
  );
};

export default WorkoutRoute;
