import { expect, afterEach, describe, it } from "vitest";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import { PasswordField, passwordFieldTestIds } from "./PasswordField";
import { act } from "react-dom/test-utils";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

describe("<PasswordField />", () => {
  it("toggles the password visibility properly", () => {
    const { getByTestId } = render(
      <PasswordField name="password" value="ssss" />
    );

    const inputField = getByTestId(passwordFieldTestIds.input);
    const toggleButton = getByTestId(passwordFieldTestIds.toggleButton);
    const visibilityOnIcon = getByTestId(passwordFieldTestIds.visibilityOn);

    const inputComponent = inputField.querySelector("input");

    expect(inputField).toBeInTheDocument();
    expect(inputComponent).toHaveAttribute("type", "password");
    expect(visibilityOnIcon).toBeInTheDocument();

    act(() => {
      fireEvent.click(toggleButton);
    });

    const visibilityOffIcon = getByTestId(passwordFieldTestIds.visibilityOff);

    expect(inputComponent).toHaveAttribute("type", "text");
    expect(visibilityOffIcon).toBeInTheDocument();
  });
});
