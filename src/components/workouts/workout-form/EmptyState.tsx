import { Box, Typography, styled } from "@mui/material";

const StyledWrapper = styled(Box)(() => ({
  margin: "auto",
  maxWidth: 500,
  textAlign: "center",
}));

export const WorkoutFormEmptyState = () => {
  return (
    <StyledWrapper>
      <img height={400} src="/workout-empty-state.jpg" />
      <Typography color="text.secondary">
        You have not recorded any workout
      </Typography>
    </StyledWrapper>
  );
};
