import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

describe('Footer Component', () => {
    test('renders paragraph with correct text when isIndex=true', () => {
        const year = getCurrentYear();
        const text = `Copyright ${year} - Holberton School.`;

        render(<Footer />);
        const paragraph = screen.getByText(text, { exact: false });
        expect(paragraph).toBeInTheDocument();
    });
});