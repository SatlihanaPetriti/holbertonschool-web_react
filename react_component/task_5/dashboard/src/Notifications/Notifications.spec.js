import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Notifications from "./Notifications";

describe("Notification Component", () => {
    const notificationsList = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        {
            id: 3,
            type: "urgent",
            html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
        },
    ];

    beforeEach(() => {
        render(
            <Notifications notifications={notificationsList} displayDrawer={true} />
        );
    });

    test("Has title", () => {
        const titleElement = screen.getByText(/Here is the list of notifications/i);
        expect(titleElement).toBeInTheDocument();
    });

    test("Contains button", () => {
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
    });

    test("Contains 3 li elements", () => {
        const listElements = screen.getAllByRole("listitem");
        expect(listElements.length).toBe(3);
        expect(listElements[0].textContent).toMatch(/New course available/i);
        expect(listElements[1].textContent).toMatch(/New resume available/i);
        expect(listElements[2].textContent).toMatch(
            /Urgent requirement - complete by EOD/i
        );
    });

    test("Close button logs message", () => {
        cleanup();
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => { });
        render(
            <Notifications
                displayDrawer={true}
                notificationsArray={notificationsList}
            />
        );
        fireEvent.click(screen.getByRole("button", { name: /Close/i }));
        expect(logSpy).toHaveBeenCalledWith("Close button has been clicked");
        logSpy.mockRestore();
    });

    it("Elements not displayed when displayDrawer is false", () => {
        cleanup();
        render(<Notifications notifications={notificationsList} />);
        const textElement = screen.queryByRole("paragraph");
        const buttonElement = screen.queryByRole("button");
        expect(textElement).not.toBeInTheDocument();
        expect(buttonElement).not.toBeInTheDocument();
    });

    it("Notifications list is empty", () => {
        cleanup();
        render(<Notifications displayDrawer={true} />);
        const noNotifications = screen.getByText(/No new notification for now/i);
        expect(noNotifications).toBeInTheDocument();
    });

    it(("Click on item logs message"), async () => {
        cleanup();
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        render(<Notifications notifications={notificationsList} displayDrawer={true} />)
        const liTwo = screen.getByTestId('item2');
        await userEvent.click(liTwo);
        expect(consoleLogSpy).toBeCalledWith("Notification 2 has been marked as read")
    });

    // ✅ ADDITIONAL TESTS

    it("does not re-render if notifications length stays the same", () => {
        cleanup();
        const sameLengthList = [
            { id: 10, type: "default", value: "One" },
            { id: 20, type: "urgent", value: "Two" },
            { id: 30, type: "urgent", value: "Three" }
        ];
        const renderSpy = jest.spyOn(Notifications.prototype, "render");

        const { rerender } = render(
            <Notifications notifications={notificationsList} displayDrawer={true} />
        );

        rerender(
            <Notifications notifications={sameLengthList} displayDrawer={true} />
        );

        expect(renderSpy).toHaveBeenCalledTimes(1);
        renderSpy.mockRestore();
    });

    it("re-renders when notifications length changes", () => {
        cleanup();
        const shorterList = [
            { id: 1, type: "default", value: "Only one item" }
        ];
        const renderSpy = jest.spyOn(Notifications.prototype, "render");

        const { rerender } = render(
            <Notifications notifications={notificationsList} displayDrawer={true} />
        );

        rerender(
            <Notifications notifications={shorterList} displayDrawer={true} />
        );

        expect(renderSpy).toHaveBeenCalledTimes(2);
        renderSpy.mockRestore();
    });

});