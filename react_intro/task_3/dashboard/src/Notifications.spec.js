import { shallow } from 'enzyme';
import Notification from './Notifications';

const wrapper = shallow(<Notification />);
describe("Notifications.test.js", () => {
    it('correct component rendering', () => {
        shallow(<Notification />);
    });
    it('correct number of items in the list', () => {
        expect(wrapper.find('ul').children().length).toEqual(3);
    });
    it('correct list title', () => {
        expect(
            wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
        ).toBeTruthy();
    });
});