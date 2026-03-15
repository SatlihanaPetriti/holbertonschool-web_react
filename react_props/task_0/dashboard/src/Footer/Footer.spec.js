import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
    beforeEach(() => {
        render(<Footer />);
    });

    //   Check text in footer
    it("Has correct text", () => {
        const FooterText = screen.getByText(/Copyright 2025 - holberton School/i);
        expect(FooterText).toBeInTheDocument();
    });
});