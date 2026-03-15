import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
    // const notificationsList = [
    //   { id: 1, type: "default", value: "New course available" },
    //   { id: 2, type: "urgent", value: "New resume available" },
    //   {
    //     id: 3,
    //     type: "urgent",
    //     html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
    //   },
    // ];

    // Check whether the li element has the color blue if type is default
    it("Color is blue when type is default", () => {
        // Props
        const type = "default";
        const value = "New course available";

        render(<NotificationItem type={type} value={value} />);

        // Get list element
        const listElement = screen.getByRole("listitem");

        // Assert that list text is blue
        expect(listElement).toHaveStyle({ color: "blue" });

        // Assert if type value is equal to default
        expect(listElement).toHaveAttribute("data-notification-type", "default");
    });

    // Check whether the li element has the color red if type is urgent
    it("Color is red when type is urgent", () => {
        // Props
        const type = "urgent";
        const value = "New resume available";

        render(<NotificationItem type={type} value={value} />);

        // Get list element
        const listElement = screen.getByRole("listitem");

        // Assert that list text is red
        expect(listElement).toHaveStyle({ color: "red" });

        // Assert if type value is equal to default
        expect(listElement).toHaveAttribute("data-notification-type", "urgent");
    });
});