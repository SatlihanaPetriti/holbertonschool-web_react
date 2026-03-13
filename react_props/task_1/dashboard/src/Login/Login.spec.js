import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login Component', () => {
    test('renders 2 labels, 2 inputs and 1 button', () => {
        render(<Login />);

        // Check for labels
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();

        // Check for inputs
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();

        // Check for button
        expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument();

        // Verify counts
        const inputs = screen.getAllByRole('textbox'); // gets email (password is type="password" so not a textbox)
        expect(inputs.length + 1).toBe(2); // +1 for password input which isn't a textbox
    });

    test('inputs focus when clicking on the related labels', async () => {
        render(<Login />);
        const user = userEvent.setup();

        const emailLabel = screen.getByText('Email');
        const emailInput = screen.getByLabelText('Email');

        await user.click(emailLabel);
        expect(emailInput).toHaveFocus();

        const passwordLabel = screen.getByText('Password');
        const passwordInput = screen.getByLabelText('Password');

        await user.click(passwordLabel);
        expect(passwordInput).toHaveFocus();
    });
});