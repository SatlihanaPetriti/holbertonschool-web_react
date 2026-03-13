import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
    it('should render the Holberton logo', () => {
        render(<Header />);
        const logo = screen.getByAltText(/holberton logo/i);
        expect(logo).toBeTruthy();
        expect(logo.src).toContain('holberton-logo.jpg');
    });

    it('should render the heading with correct text', () => {
        render(<Header />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeTruthy();
        expect(heading.textContent).toBe('School dashboard');
    });
});