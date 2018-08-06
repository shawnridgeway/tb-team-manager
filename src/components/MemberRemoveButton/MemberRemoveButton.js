// 3p
import * as React from 'react';
import PropTypes from 'prop-types';

// project
import './MemberRemoveButton.css';
import { MemberShape } from '../../shapes';


class MemberRemoveButton extends React.Component {
  removeMember = () => {
    this.props.onRemoveMember(this.props.member.id);
  };

  render() {
    return (
        <div className="member-remove text-warning"
             onClick={this.removeMember}>
          X
        </div>
    );
  }
}

MemberRemoveButton.propTypes = {
  member: MemberShape,
  onRemoveMember: PropTypes.func,
};

export default MemberRemoveButton;
