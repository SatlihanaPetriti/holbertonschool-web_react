import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
    beforeEach(() => {
        // Don't render here - each test should control its own render
        jest.clearAllMocks();
    });

    afterEach(() => {
        cleanup();
    });

    // Remove .skip from all tests
    it("Renders Header component", () => {
        render(<App />);
        const heading = screen.getByRole("heading", {
            level: 1,
            name: /school dashboard/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it("Renders Login Component", () => {
        render(<App />);
        const loginText = screen.getByText(/Login to access the full dashboard/i);
        expect(loginText).toBeInTheDocument();
    });

    it("Renders Footer Component", () => {
        render(<App />);
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });

    it("Login is rendered when isLoggedIn is false", () => {
        const rendered = render(<App isLoggedIn={false} />);
        const container = rendered.container;
        const loginComponent = container.querySelector(".App-body");
        expect(loginComponent).toBeInTheDocument();
    });

    it("CourseList is rendered when isLoggedIn is true", () => {
        const rendered = render(<App isLoggedIn={true} />);
        const container = rendered.container;
        const courseList = container.querySelector("#CourseList");
        expect(courseList).toBeInTheDocument();
    });

    it("Logout function gets called once", async () => {
        cleanup();

        const logOut = jest.fn();
        // Mock alert to prevent actual alert popup
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });

        render(<App logOut={logOut} />);

        await userEvent.keyboard("{Control>}h{/Control}");

        expect(logOut).toBeCalledTimes(1);

        alertMock.mockRestore();
    });

    it("Alert function is called with correct message", async () => {
        cleanup();

        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });

        render(<App />);

        await userEvent.keyboard("{Control>}h{/Control}");

        expect(alertMock).toHaveBeenCalledWith("Logging you out");
        expect(alertMock).toBeCalledTimes(1);

        alertMock.mockRestore();
    });

    // Add this test to verify event listener removal
    it("should remove event listener when component unmounts", () => {
        const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });

        const { unmount } = render(<App />);
        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

        removeEventListenerSpy.mockRestore();
        alertMock.mockRestore();
    });
});