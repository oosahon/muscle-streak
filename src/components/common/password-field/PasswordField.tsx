import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";

type PasswordFieldProps = TextFieldProps & {
  "data-testid"?: string;
};

const testIds = {
  input: "password-field-input",
  toggleButton: "password-field-toggle-button",
  visibilityOff: "password-field-visibility-off",
  visibilityOn: "password-field-visibility-on",
};

export const PasswordField = (props: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordRevealToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      {...props}
      data-testid={props["data-testid"] || testIds.input}
      type={showPassword ? "text" : "password"}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <IconButton
            onClick={handlePasswordRevealToggle}
            data-testid={testIds.toggleButton}
          >
            {showPassword ? (
              <VisibilityOff data-testid={testIds.visibilityOff} />
            ) : (
              <Visibility data-testid={testIds.visibilityOn} />
            )}
          </IconButton>
        ),
      }}
    />
  );
};

export { testIds as passwordFieldTestIds };
