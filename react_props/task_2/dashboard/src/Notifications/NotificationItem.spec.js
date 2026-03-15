/* eslint-disable */
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
    const mockNotifications = [
        {
            id: 1,
            type: 'default',
            value: 'New course available'
        },
        {
            id: 2,
            type: 'urgent',
            value: 'New resume available'
        },
        {
            id: 3,
            type: 'urgent',
            html: { __html: '<strong>Urgent requirement</strong>' }
        }
    ];

    test('renders the notifications title', () => {
        render(<Notifications notifications={mockNotifications} />);
        const title = screen.getByText(/Here is the list of notifications/i);
        expect(title).toBeInTheDocument();
    });

    test('renders the close button', () => {
        render(<Notifications notifications={mockNotifications} />);
        const button = screen.getByRole('button', { name: /close/i });
        expect(button).toBeInTheDocument();
    });

    test('renders 3 notification items', () => {
        render(<Notifications notifications={mockNotifications} />);
        const items = screen.getAllByRole('listitem');
        expect(items).toHaveLength(3);
    });

    test('displays correct notification text through notifications prop', () => {
        render(<Notifications notifications={mockNotifications} />);

        // Check for the text content
        expect(screen.getByText('New course available')).toBeInTheDocument();
        expect(screen.getByText('New resume available')).toBeInTheDocument();

        // Check for HTML content
        const htmlElement = document.querySelector('li[data-notification-type="urgent"]:last-child');
        expect(htmlElement.innerHTML).toContain('<strong>Urgent requirement</strong>');
    });

    test('logs message when close button is clicked', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        render(<Notifications notifications={mockNotifications} />);
        const button = screen.getByRole('button', { name: /close/i });
        fireEvent.click(button);
        expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
        consoleSpy.mockRestore();
    });

    test('renders with empty notifications array', () => {
        render(<Notifications notifications={[]} />);
        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(0);
    });
});