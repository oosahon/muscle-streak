import { Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (formValues: LoginFormValues) => void;
}

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const {
    values: formValues,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik<LoginFormValues>({
    initialValues,
    onSubmit,
    validationSchema: loginValidationSchema,
    validateOnBlur: true,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          required
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          required
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />

        <Button type="submit">Login</Button>
      </Stack>
    </form>
  );
};
