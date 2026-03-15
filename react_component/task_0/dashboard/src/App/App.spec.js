import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    afterEach(() => {
        cleanup();
    });

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

    it("CourseList is rendered when isLoggedIn is false", () => {
        const rendered = render(<App isLoggedIn={false} />);
        const container = rendered.container;

        const loginComponent = container.querySelector(".App-body");
        expect(loginComponent).toBeInTheDocument();

        const courseList = container.querySelector("#CourseList");
        expect(courseList).not.toBeInTheDocument();
    });

    it("CourseList is rendered when isLoggedIn is true", () => {
        const rendered = render(<App isLoggedIn={true} />);
        const container = rendered.container;

        const courseList = container.querySelector("#CourseList");
        expect(courseList).toBeInTheDocument();

        const loginComponent = container.querySelector(".App-body");
        expect(loginComponent).not.toBeInTheDocument();
    });

    describe("Keyboard events", () => {
        it("should call logOut function when control and h keys are pressed", () => {
            const mockLogOut = jest.fn();

            const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => { });

            render(<App logOut={mockLogOut} />);

            const event = new KeyboardEvent('keydown', {
                ctrlKey: true,
                key: 'h',
                bubbles: true,
                cancelable: true
            });

            document.dispatchEvent(event);

            expect(mockLogOut).toHaveBeenCalledTimes(1);

            mockAlert.mockRestore();
        });

        it("should call alert with 'Logging you out' when control and h keys are pressed", () => {
            const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => { });

            render(<App />);

            const event = new KeyboardEvent('keydown', {
                ctrlKey: true,
                key: 'h',
                bubbles: true,
                cancelable: true
            });

            document.dispatchEvent(event);

            expect(mockAlert).toHaveBeenCalledWith('Logging you out');
            expect(mockAlert).toHaveBeenCalledTimes(1);

            mockAlert.mockRestore();
        });

        it("should not call alert or logOut for other key combinations", () => {
            const mockLogOut = jest.fn();
            const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => { });

            render(<App logOut={mockLogOut} />);

            const events = [
                { ctrlKey: true, key: 'a' },
                { ctrlKey: false, key: 'h' },
                { ctrlKey: true, key: 'H' },
                { ctrlKey: true, key: 'c' }
            ];

            events.forEach(eventData => {
                const event = new KeyboardEvent('keydown', {
                    ctrlKey: eventData.ctrlKey,
                    key: eventData.key,
                    bubbles: true,
                    cancelable: true
                });

                document.dispatchEvent(event);
            });

            expect(mockLogOut).not.toHaveBeenCalled();
            expect(mockAlert).not.toHaveBeenCalled();

            mockAlert.mockRestore();
        });

        it("should remove event listener when component unmounts", () => {
            const mockLogOut = jest.fn();
            const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => { });

            const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');

            const { unmount } = render(<App logOut={mockLogOut} />);

            unmount();

            expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

            removeEventListenerSpy.mockRestore();
            mockAlert.mockRestore();
        });
    });
});