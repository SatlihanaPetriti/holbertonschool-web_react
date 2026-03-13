import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('renders the Holberton logo', () => {
        render(<Header />);
        const logo = screen.getByAltText('holberton logo');
        expect(logo).toBeInTheDocument();
    });

    test('renders the heading h1 element with the correct text', () => {
        render(<Header />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('School dashboard');
    });
});