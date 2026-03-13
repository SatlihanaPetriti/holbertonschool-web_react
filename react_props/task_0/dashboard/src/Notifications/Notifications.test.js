import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
    render(<Notifications />);
});