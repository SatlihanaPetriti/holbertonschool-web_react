import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {

    it("Renders Header component", () => {
        render(<App />);
        const heading = screen.getByRole("heading", {
            level: 1,
            name: /school dashboard/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it("Renders Login Component when NOT logged in", () => {
        render(<App />);
        const loginText = screen.getByText(/Login to access the full dashboard/i);
        expect(loginText).toBeInTheDocument();
    });

    it("Renders Footer Component", () => {
        render(<App />);
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });

    it("Login is rendered when user is NOT logged in", () => {
        const { container } = render(<App />);
        const loginComponent = container.querySelector(".App-body");
        expect(loginComponent).toBeInTheDocument();
    });

    it("CourseList is rendered when user IS logged in", () => {
        const { container } = render(
            <App initialUser={{ email: "test@test.com", password: "12345678", isLoggedIn: true }} />
        );

        const courseList = container.querySelector("#CourseList");
        expect(courseList).toBeInTheDocument();
    });
});