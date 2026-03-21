import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    it("Displays 'News from the School' section by default", () => {
        render(<App />);
        const newsTitle = screen.getByRole("heading", {
            level: 2,
            name: /news from the school/i,
        });
        expect(newsTitle).toBeInTheDocument();

        const newsContent = screen.getByText(/Holberton School News goes here/i);
        expect(newsContent).toBeInTheDocument();
    });

    it("Renders Header component", () => {
        render(<App />);
        const heading = screen.getByRole("heading", {
            level: 1,
            name: /school dashboard/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it("Renders Login component when isLoggedIn is false", () => {
        render(<App />);
        const loginTitle = screen.getByRole("heading", {
            level: 2,
            name: /log in to continue/i,
        });
        expect(loginTitle).toBeInTheDocument();

        const loginText = screen.getByText(/Login to access the full dashboard/i);
        expect(loginText).toBeInTheDocument();
    });

    it("Renders CourseList component when isLoggedIn is true", () => {
        render(<App isLoggedIn={true} />);
        const courseTitle = screen.getByRole("heading", {
            level: 2,
            name: /course list/i,
        });
        expect(courseTitle).toBeInTheDocument();

        // Check that all courses are displayed
        expect(screen.getByText(/ES6/i)).toBeInTheDocument();
        expect(screen.getByText(/Webpack/i)).toBeInTheDocument();
        expect(screen.getByText(/React/i)).toBeInTheDocument();
    });

    it("Renders Footer component", () => {
        render(<App />);
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });
});