import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
    test('renders the Holberton logo', () => {
        render(<Header />);

        // Check for logo by alt text
        const logo = screen.getByAltText('holberton logo');
        expect(logo).toBeInTheDocument();
    });

    test('renders the heading h1 element with the correct text', () => {
        render(<Header />);

        // Check for heading
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe('School dashboard');
    });
});