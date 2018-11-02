import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TeamManager from '../../components/TeamManager/TeamManager';

const memberData = [
  {
    username: 'Max Mustermann',
    role: 'Admin',
    picture: 'avatar-default.png',
    id: 1,
  },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App allMembers={memberData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('selected member state management', () => {
  const wrapper = shallow(<App allMembers={memberData} />);
  const instance = wrapper.instance();

  it('begins with no selected members', () => {
    expect(instance.state.selectedMembers.length).toEqual(0);
  });

  it('has one selected member after adding', () => {
    instance.handleAddMember(memberData[0].id);
    expect(instance.state.selectedMembers.length).toEqual(1);
  });

  it('has no selected members after removing', () => {
    instance.handleRemoveMember(memberData[0].id);
    expect(instance.state.selectedMembers.length).toEqual(0);
  });
});
