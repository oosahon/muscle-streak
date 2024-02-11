import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { WorkoutWeek } from "../../components/workouts/workout-week/WorkoutWeek";

const WorkoutRoute = () => {
  return (
    <>
      <WorkoutWeek />
      <Box display="flex" justifyContent="center" mt={5}>
        <Button startIcon={<Add />}>Record a new workout</Button>
      </Box>
    </>
  );
};

export default WorkoutRoute;
