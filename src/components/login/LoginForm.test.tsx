import { describe, expect, it, vi } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { LoginForm } from "./LoginForm";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { afterEach } from "node:test";

expect.extend(matchers);

const prepare = () => {
  const onSubmit = vi.fn();
  const { getByRole, getByLabelText } = render(
    <LoginForm onSubmit={onSubmit} />
  );

  const emailField = getByRole("textbox", { name: "Email" });
  const passwordField = getByLabelText(/password/i);

  const submitButton = getByRole("button", { name: "Login" });

  return { emailField, passwordField, submitButton, onSubmit };
};

afterEach(() => {
  cleanup();
});

describe("<Login />", () => {
  it("renders the right fields", () => {
    const { emailField, passwordField, submitButton } = prepare();

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it("validates the email field", async () => {
    const { emailField, submitButton } = prepare();

    act(() => {
      fireEvent.change(emailField, { target: { value: "ss" } });
      fireEvent.change(emailField, { target: { value: "" } });
      fireEvent.blur(emailField);
    });

    await waitFor(() => {
      const emailErrorMessage = screen.getByText("Email is required");

      expect(emailErrorMessage).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });

    act(() => {
      fireEvent.focus(emailField);
      fireEvent.change(emailField, { target: { value: "ss" } });
      fireEvent.blur(emailField);
    });

    await waitFor(() => {
      const emailErrorMessage = screen.getByText("Invalid email");

      expect(emailErrorMessage).toBeInTheDocument();
    });
  });

  it("validates the password field", async () => {
    const { passwordField, submitButton } = prepare();

    act(() => {
      fireEvent.change(passwordField, { target: { value: "ss" } });
      fireEvent.change(passwordField, { target: { value: "" } });
      fireEvent.blur(passwordField);
    });

    await waitFor(() => {
      const passwordErrorMessage = screen.getByText(/password is required/i);

      expect(passwordErrorMessage).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });
  });

  it("calls the onSubmit handler properly", async () => {
    const { emailField, passwordField, submitButton, onSubmit } = prepare();

    act(() => {
      fireEvent.change(emailField, { target: { value: "email@email.com" } });
      fireEvent.change(passwordField, { target: { value: "password" } });
      fireEvent.click(submitButton);
    });

    await waitFor(async () => {
      expect(submitButton).toBeEnabled();
      expect(onSubmit).toHaveBeenCalledOnce();
    });
  });
});
