import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';


it('should call onClose when clicked occurs outside', () => {
	const onClose = jest.fn();
	const wrapper = mount(<Dropdown onClose={onClose} />);

	const event = new Event('click');
	document.dispatchEvent(event);

  	return expect(onClose).toBeCalled();
});

it('should not call onClose when clicked occurs inside', () => {
	const onClose = jest.fn();

	const wrapper = mount(<Dropdown onClose={onClose} />);

	const event = new Event('click');
	wrapper.find('div').instance().dispatchEvent(event);

  	return expect(onClose).not.toBeCalled();
});