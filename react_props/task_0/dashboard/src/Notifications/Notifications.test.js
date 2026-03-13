import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('Header renders without crashing', () => {
    render(<Notifications />);
});