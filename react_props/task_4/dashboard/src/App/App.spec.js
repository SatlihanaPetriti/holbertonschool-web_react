import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    beforeEach(() => {
        // Render app component
        render(<App />);
    });

    // Test if app component renders Header component
    it("Renders Header component", () => {
        const heading = screen.getByRole("heading", {
            level: 1,
            name: /school dashboard/i,
        });
        expect(heading).toBeInTheDocument();
    });

    // Test if app component renders Login component
    it("Renders Login Component", () => {
        const loginText = screen.getByText(/Login to access the full dashboard/i);
        expect(loginText).toBeInTheDocument();
    });

    // Test if app component renders Footer component
    it("Renders Footer Component", () => {
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });

    // Test if login is rendered when isLoggedIn is false
    it("CourseList is rendered when isLoggedIn is false", () => {
        cleanup();

        const rendered = render(<App />);
        const container = rendered.container;

        // Get courseList
        const loginComponent = container.querySelector(".App-body");

        // Assert that CourseList exists
        expect(loginComponent).toBeInTheDocument();
    });

    // Test if courseList is rendered when isLoggedIn is true
    it("CourseList is rendered when isLoggedIn is true", () => {
        cleanup();

        const rendered = render(<App isLoggedIn={true} />);
        const container = rendered.container;

        // Get courseList
        const courseList = container.querySelector("#CourseList");

        // Assert that CourseList exists
        expect(courseList).toBeInTheDocument();
    });
});