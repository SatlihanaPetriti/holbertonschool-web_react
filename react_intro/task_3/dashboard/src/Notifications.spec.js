import Enzyme, { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {

    test('Test 1: Verify notification title exists (case insensitive)', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text().toLowerCase()).toContain('here is the list of notifications');
    });

    test('Test 2: Verify close button exists', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('button').exists()).toBe(true);
    });

    test('Test 3: Verify three list items are rendered', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    test('Test 4: Verify clicking close button logs message to console', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        const wrapper = shallow(<Notifications />);
        wrapper.find('button').simulate('click');
        expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
        consoleSpy.mockRestore();
    });
});