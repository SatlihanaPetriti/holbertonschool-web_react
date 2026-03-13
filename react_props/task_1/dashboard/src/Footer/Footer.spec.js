import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear } from '../utils/utils';

describe('Footer Component', () => {
    test('renders copyright with current year when isIndex=true', () => {
        const year = getCurrentYear();
        render(<Footer />);

        const paragraph = screen.getByText(
            `Copyright ${year} - Holberton School main dashboard`,
            { exact: false }
        );

        expect(paragraph).toBeInTheDocument();
    });
});