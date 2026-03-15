import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
    beforeEach(() => {
        render(<Login />);
    });

    // Test if Login paragraph has correct text
    it("Login has correct text", () => {
        const loginText = screen.getByText(/Login to access the full dashboard/i);

        expect(loginText).toBeInTheDocument();
    });

    // Test if Login renders two input elements
    it("renders two input elements", () => {
        //Get input elements
        const inputElements = screen.getAllByRole("textbox");
        const inputLength = inputElements.length;

        // Assert element
        expect(inputLength).toEqual(1);
    });

    // Test if Login renders the correct Labels
    it("renders two label elements with text 'email' & 'password'", () => {
        // Get labels
        const email = screen.getByLabelText(/Email/i);
        const password = screen.getByLabelText(/Password/i);

        // Assert elements and values
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    });

    // Test if Login renders button with correct text
    it("renders two button with text 'OK'", () => {
        //Get button
        const button = screen.getByRole("button");

        // Assert text content of button
        expect(button.textContent).toBe("OK");
    });
});