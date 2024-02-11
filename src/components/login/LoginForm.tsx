import { Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFieldErrorMessage } from "../../hooks/useFieldErrorMessage";
import { PasswordField } from "../common/password-field/PasswordField";

export interface LoginFormValues {
  email: string;
  password: string;
}

const testIds = {
  emailInput: "login-form-email-input",
  passwordInput: "login-form-password-input",
};

interface LoginFormProps {
  onSubmit: (formValues: LoginFormValues) => void;
}

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const {
    values: formValues,
    errors,
    isValid,
    dirty,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<LoginFormValues>({
    initialValues,
    onSubmit,
    validationSchema: loginValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  const getErrorMessage = useFieldErrorMessage<LoginFormValues>({
    errors,
    touched,
  });

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <Stack spacing={2}>
        <TextField
          required
          id={testIds.emailInput}
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!getErrorMessage("email")}
          helperText={getErrorMessage("email")}
        />
        <PasswordField
          required
          id={testIds.passwordInput}
          label="Password"
          name="password"
          value={formValues.password}
          onBlur={handleBlur}
          onChange={handleChange}
          error={!!getErrorMessage("password")}
          helperText={getErrorMessage("password")}
        />

        <div>
          <Button
            type="submit"
            variant="contained"
            disabled={!isValid || !dirty}
            onClick={() => onSubmit(formValues)}
          >
            Login
          </Button>
        </div>
      </Stack>
    </form>
  );
};

export { testIds as loginFormTestIds };
