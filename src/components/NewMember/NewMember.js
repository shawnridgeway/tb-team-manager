// 3p
import * as React from 'react';
import PropTypes from 'prop-types';

// project
import './NewMember.css';
import MemberSelector from '../MemberSelector/MemberSelector';
import { MemberShape } from '../../shapes';
import Dropdown from '../generic/Dropdown/Dropdown';


class NewMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  handleClick = () => {
    this.setState({
      dropdownOpen: true
    });
  };

  handleCloseDropdown = () => {
    this.setState({
      dropdownOpen: false
    });
  };

  render() {
    return (
        <div className="member-ctr member-ctr--clickable dropdown-ctr"
             onClick={this.handleClick}>
          <div className="member-pictureCtr">
            <span className="newMember-picture">+</span>
          </div>
          <div className="member-nameCtr text-highlighted">
            <strong>Add team member to this test</strong>
          </div>
          {this.state.dropdownOpen && (
              <Dropdown onClose={this.handleCloseDropdown}>
                <MemberSelector
                    onAdd={this.props.onAdd}
                    allMembers={this.props.allMembers}
                    selectedMembers={this.props.selectedMembers}
                    onClose={this.handleCloseDropdown}
                />
              </Dropdown>
          )}
        </div>
    );
  }
}

NewMember.propTypes = {
  onAdd: PropTypes.func,
  allMembers: PropTypes.arrayOf(MemberShape),
  selectedMembers: PropTypes.arrayOf(PropTypes.number),
};

export default NewMember;
