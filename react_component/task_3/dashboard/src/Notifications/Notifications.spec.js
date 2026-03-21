import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Notifications from "./Notifications";

describe("Notifications Component - render optimization", () => {
    it("does not re-render if notifications length stays the same", () => {
        const notifications = [
            { id: 1, type: "default", value: "New course available" },
        ];

        const { rerender } = render(
            <Notifications notifications={notifications} displayDrawer={true} />
        );

        // Spy on render
        const renderSpy = jest.spyOn(Notifications.prototype, "render");

        // Re-render with the same length
        rerender(<Notifications notifications={[{ id: 1, type: "default", value: "Updated text" }]} displayDrawer={true} />);

        expect(renderSpy).not.toHaveBeenCalled();

        renderSpy.mockRestore();
    });

    it("re-renders if notifications length changes", () => {
        const notifications = [
            { id: 1, type: "default", value: "New course available" },
        ];

        const { rerender } = render(
            <Notifications notifications={notifications} displayDrawer={true} />
        );

        const renderSpy = jest.spyOn(Notifications.prototype, "render");

        // Re-render with increased length
        const newNotifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
        ];

        rerender(<Notifications notifications={newNotifications} displayDrawer={true} />);

        expect(renderSpy).toHaveBeenCalled();

        renderSpy.mockRestore();
    });
});