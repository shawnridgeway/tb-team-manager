// 3p
import * as React from 'react';
import PropTypes from 'prop-types';

// project
import './MemberSelector.css';
import { MemberShape } from '../../shapes';
import MemberSelectorOption from '../MemberSelectorOption/MemberSelectorOption'


class MemberSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
  }

  handleFilterChange = (event) => {
    const {value} = event.target;
    this.setState({
      filter: value
    });
  };

  renderOptions = (memberOptions) => {
    return memberOptions
        .slice(0, !this.state.moreOpen ? 5 : undefined)
        .map(member => (
            <MemberSelectorOption
                key={member.id}
                member={member}
                onAdd={this.props.onAdd}
            />
        ));
  };

  render() {
    const memberOptions = this.props.allMembers
        .filter(member => this.props.selectedMembers.indexOf(member.id) === -1 &&
            member.username.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1);
    return (
        <div>
          <div className="memberSelector-inputCtr">
            <input
                type="search"
                className="memberSelector-input"
                value={this.state.filter}
                onChange={this.handleFilterChange}
                autoFocus={true}
            />
          </div>
          <div className="memberSelector-optionCtr">
            {this.renderOptions(memberOptions)}
          </div>
          {memberOptions.length === 0 && (
              <div className="memberSelector-noResults">
                <div className="memberSelector-title text-highlighted">Team member not found.</div>
                <small className="memberSelector-subtext">Maybe he/she is not in your <a href="#">team</a>.</small>
              </div>
          )}
        </div>
    );
  }
}

MemberSelector.propTypes = {
  allMembers: PropTypes.arrayOf(MemberShape),
  selectedMembers: PropTypes.arrayOf(PropTypes.number),
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
};

export default MemberSelector;
