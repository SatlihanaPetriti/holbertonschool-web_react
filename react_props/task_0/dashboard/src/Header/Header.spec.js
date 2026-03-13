import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
    beforeEach(() => {
        render(<Header />);
    });

    test('renders the Holberton logo', () => {
        const logo = screen.getByAltText(/holberton logo/i);
        expect(logo).toBeInTheDocument();
    });

    test('renders the heading h1 with correct text', () => {
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('School dashboard');
    });
});