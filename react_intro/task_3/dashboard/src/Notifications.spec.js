import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {

    test('renders the notifications title "Here is the list of notifications" ignoring case', () => {
        render(<Notifications />);
        const titleElement = screen.getByText(/here is the list of notifications/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders the close button element', () => {
        render(<Notifications />);
        const closeButton = screen.getByLabelText(/close/i);
        expect(closeButton).toBeInTheDocument();
    });

    test('renders three notification list items', () => {
        render(<Notifications />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
    });

    test('clicking close button logs "Close button has been clicked" to console', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        render(<Notifications />);
        const closeButton = screen.getByLabelText(/close/i);
        fireEvent.click(closeButton);
        expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
        consoleSpy.mockRestore();
    });
});