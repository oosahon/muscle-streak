import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Paper,
} from "@mui/material";
import { workouts } from "../../../dictionary/workout";
import { Close, CopyAll } from "@mui/icons-material";

interface WorkoutFormProps {
  open: boolean;
  onClose: () => void;
}

export const WorkoutForm = ({ open, onClose }: WorkoutFormProps) => {
  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle display="flex" justifyContent="space-between">
        <Typography variant="h5">Add New Workout</Typography>

        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={3} marginTop={2}>
          <Autocomplete
            fullWidth
            PaperComponent={(props) => <Paper {...props} variant="outlined" />}
            ListboxProps={{
              sx: {
                maxHeight: 250,
              },
            }}
            options={workouts}
            renderInput={(prams) => (
              <TextField
                {...prams}
                label="Workout Type"
                placeholder="Select strength training type"
              />
            )}
          />
          <div>
            <InputLabel sx={{ mb: 0.5 }}>Set</InputLabel>
            <Stack direction="row" spacing={3}>
              <TextField label="Reps" fullWidth type="number" />
              <TextField label="Weight" fullWidth type="number" />
              <TextField
                label="Unit"
                select
                fullWidth
                sx={{ maxWidth: 100 }}
                value="kg"
              >
                <MenuItem value="kg">KG</MenuItem>
                <MenuItem value="lb">LB</MenuItem>
              </TextField>
              <Tooltip title="Duplicate set" arrow placement="top">
                <IconButton>
                  <CopyAll />
                </IconButton>
              </Tooltip>
            </Stack>
          </div>

          <TextField label="Additional note" multiline rows={8} />
          <div>
            <Button variant="contained">Save Workout</Button>
          </div>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
