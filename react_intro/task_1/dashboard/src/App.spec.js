import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 with text School Dashboard', () => {
    render(<App />);
    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
});

test('renders correct text in app-body and app-footer', () => {
    render(<App />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
});

test('renders an img element', () => {
    render(<App />);
    const img = screen.getByAltText(/holberton logo/i);
    expect(img).toBeInTheDocument();
});

test('renders 2 input elements', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(2);
});

test('renders Email and Password labels', () => {
    render(<App />);
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
});

test('renders OK button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
});