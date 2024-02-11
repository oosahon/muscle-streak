import { Box, Fab, Typography } from "@mui/material";
import { daysOfWeek } from "../../../dictionary/date";

interface DateFabProps {
  date: Date;
  onClick: () => void;
  active: boolean;
}

export const DateFab = ({ date, onClick, active }: DateFabProps) => {
  const dayOfTheWeek = daysOfWeek[date.getDay()];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="body2" mb={0.5}>
        {dayOfTheWeek}
      </Typography>
      <Fab
        onClick={onClick}
        color={active ? "primary" : "inherit"}
        size="small"
      >
        {date.getDate()}
      </Fab>
    </Box>
  );
};
