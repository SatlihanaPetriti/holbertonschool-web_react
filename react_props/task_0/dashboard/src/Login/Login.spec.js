import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login Component', () => {
    beforeEach(() => {
        render(<Login />);
    });

    test('renders 2 labels, 2 inputs and 1 button', () => {
        const labels = screen.getAllByRole('label');
        const inputs = screen.getAllByRole('textbox');
        const passwordInputs = screen.getAllByLabelText(/password/i);
        const button = screen.getByRole('button');

        expect(labels.length).toBe(2);
        expect(inputs.length + passwordInputs.length).toBe(2);
        expect(button).toBeInTheDocument();
    });

    test('inputs focus when clicking on related labels', async () => {
        const user = userEvent.setup();
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);

        await user.click(screen.getByText(/email/i));
        expect(emailInput).toHaveFocus();

        await user.click(screen.getByText(/password/i));
        expect(passwordInput).toHaveFocus();
    });
});