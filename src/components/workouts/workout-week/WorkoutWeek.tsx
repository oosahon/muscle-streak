import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useWeekDays } from "../../../hooks/useWeekDays";
import { DateFab } from "../date-fab/DateFab";
import { useSearchParams } from "react-router-dom";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { monthsOfYear } from "../../../dictionary/date";

export const WorkoutWeek = () => {
  const [, setSearchParams] = useSearchParams();
  const { days, getPrevious, getNext } = useWeekDays();

  const getIsActive = (date: Date) => {
    const today = new Date().toDateString();
    return date.toDateString() === today;
  };

  const handleDateClick = (date: Date) => {
    setSearchParams({
      date: date.toDateString(),
    });
  };

  const getMonth = () => {
    if (!days.length) {
      return "";
    }

    const dateToUse = days[0];
    const month = monthsOfYear[dateToUse.getMonth()];
    const year = dateToUse.getFullYear();
    const displayYear = new Date().getFullYear() === year ? "" : year;
    const monthDisplay = `${month} ${displayYear}`;
    return monthDisplay.trim();
  };

  return (
    <Stack spacing={2} justifyContent="center">
      <Typography variant="h5" alignSelf="center">
        {getMonth()}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        {days.map((date) => (
          <DateFab
            key={date.toString()}
            date={date}
            active={getIsActive(date)}
            onClick={() => handleDateClick(date)}
          />
        ))}
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={3}>
        <Tooltip title="Previous">
          <IconButton onClick={getPrevious}>
            <ArrowBack />
          </IconButton>
        </Tooltip>

        <Tooltip title="Next">
          <IconButton onClick={getNext}>
            <ArrowForward />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};
