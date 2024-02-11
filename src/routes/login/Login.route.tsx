import { Paper, Typography, styled } from "@mui/material";
import { LoginForm, LoginFormValues } from "../../components/login/LoginForm";
import { useNavigate } from "react-router-dom";
import { routeList } from "../route-lits";

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 500,
  width: "100%",
  padding: theme.spacing(3),
  margin: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  form: {
    marginTop: theme.spacing(3),
  },
}));

const LoginRoute = () => {
  const navigate = useNavigate();

  const handleLogin = (formValues: LoginFormValues) => {
    // TODO osahon: handle authentication
    if (formValues.email && formValues.password) {
      navigate(routeList.workouts);
    }
  };

  return (
    <StyledPaper variant="outlined">
      <Typography variant="h2">Login</Typography>

      <LoginForm onSubmit={handleLogin} />
    </StyledPaper>
  );
};

export default LoginRoute;
