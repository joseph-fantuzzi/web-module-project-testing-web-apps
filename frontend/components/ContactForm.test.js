import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

beforeEach(() => {
  render(<ContactForm />);
});

describe("Contact Form Component", () => {
  test("renders without errors", () => {
    render(<ContactForm />);
  });

  test("renders the contact form header", () => {
    const header = screen.queryByText("Contact Form");
    expect(header).toBeVisible();
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header.textContent).toBe("Contact Form");
  });

  test("renders ONE error message if user enters less then 5 characters into firstname.", async () => {
    const firstNameInput = screen.getByPlaceholderText("Edd");
    fireEvent.change(firstNameInput, { target: { value: "Joe" } });
    const errorMsg = await screen.findByTestId("error");
    expect(errorMsg).toBeVisible();
    expect(errorMsg).toBeInTheDocument();
  });

  test("renders THREE error messages if user enters no values into any fields.", async () => {
    const submitBtn = screen.getByText("Submit");
    fireEvent.click(submitBtn);
    const errorMsgs = await screen.findAllByTestId("error");
    expect(errorMsgs).toHaveLength(3);
  });

  test("renders ONE error message if user enters a valid first name and last name but no email.", async () => {});

  test('renders "email must be a valid email address" if an invalid email is entered', async () => {});

  test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {});

  test("renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.", async () => {});

  test("renders all fields text when all fields are submitted.", async () => {});
});
