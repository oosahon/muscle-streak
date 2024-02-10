import { Paper, Typography, styled } from "@mui/material";
import { LoginForm, LoginFormValues } from "../components/login/Login";

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
  const handleLogin = (formValues: LoginFormValues) => {
    console.log("Form values: ", formValues);
  };

  return (
    <StyledPaper>
      <Typography variant="h1">Login</Typography>

      <LoginForm onSubmit={handleLogin} />
    </StyledPaper>
  );
};

export default LoginRoute;
