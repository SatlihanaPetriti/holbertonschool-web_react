import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
    afterEach(() => cleanup());

    it("renders Header component", () => {
        render(<App />);
        expect(
            screen.getByRole("heading", { level: 1, name: /school dashboard/i })
        ).toBeInTheDocument();
    });

    it("renders Login component when not logged in", () => {
        render(<App isLoggedIn={false} />);
        expect(
            screen.getByText(/Login to access the full dashboard/i)
        ).toBeInTheDocument();
    });

    it("renders CourseList when logged in", () => {
        render(<App isLoggedIn={true} />);
        expect(screen.getByText(/ES6/i)).toBeInTheDocument();
    });

    it("renders Footer component", () => {
        render(<App />);
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });

    it("calls logOut when Ctrl+H is pressed", async () => {
        const logOut = jest.fn();
        jest.spyOn(window, "alert").mockImplementation(() => { });

        render(<App logOut={logOut} />);

        await userEvent.keyboard("{Control>}h{/Control}");

        expect(logOut).toHaveBeenCalledTimes(1);

        window.alert.mockRestore();
    });

    it("calls alert with correct message when Ctrl+H is pressed", async () => {
        const alertMock = jest.spyOn(window, "alert").mockImplementation(() => { });

        render(<App />);

        await userEvent.keyboard("{Control>}h{/Control}");

        expect(alertMock).toHaveBeenCalledWith("Logging you out");

        alertMock.mockRestore();
    });

    it("removes keydown listener on unmount", () => {
        const removeSpy = jest.spyOn(document, "removeEventListener");

        const { unmount } = render(<App />);
        unmount();

        expect(removeSpy).toHaveBeenCalledWith("keydown", expect.any(Function));

        removeSpy.mockRestore();
    });
});