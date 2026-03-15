import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications Component", () => {

    const notificationsList = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        {
            id: 3,
            type: "urgent",
            html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
        },
    ];

    it("renders the 3 notification items", () => {
        render(<Notifications notifications={notificationsList} />);

        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(3);
    });

    it("renders the correct notification text", () => {
        render(<Notifications notifications={notificationsList} />);

        expect(screen.getByText("New course available")).toBeInTheDocument();
        expect(screen.getByText("New resume available")).toBeInTheDocument();
        expect(screen.getByText(/Urgent requirement/)).toBeInTheDocument();
    });

});