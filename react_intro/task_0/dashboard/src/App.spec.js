import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders h1 with text School Dashboard', () => {
    render(<App />);
    const heading = screen.getByText('School Dashboard');
    expect(heading).toBeInTheDocument();
});

test('renders correct text in app-body and app-footer', () => {
    render(<App />);
    expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument();
    expect(screen.getByText('Copyright 2020 - Holberton School')).toBeInTheDocument();
});

test('renders an img element', () => {
    render(<App />);
    const img = screen.getByAltText('Holberton logo');
    expect(img).toBeInTheDocument();
});