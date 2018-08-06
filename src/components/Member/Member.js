// 3p
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// project
import './Member.css';
import { MemberShape } from '../../shapes';
import DefaultPicture from './avatar-default.png';


class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  handleMouseEnter = () => {
    this.setState({
      hovered: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hovered: false
    });
  };

  handleClick = () => {
    const {member} = this.props;
    if (this.props.onClick) {
      this.props.onClick(member.id);
    }
  };

  render() {
    const {member} = this.props;
    // Use default picture for this assignment
    const picture = /*member.picture ||*/ DefaultPicture;
    const ctrClass = classnames('member-ctr', this.props.className, {
      'member-ctr--loose': !this.props.tightView,
      'member-ctr--tight': this.props.tightView,
      'member-ctr--clickable': this.props.onClick
    });
    const pictureClass = classnames('member-picture', {
      'picture--small': this.props.tightView,
    });
    return (
        <div className={ctrClass}
             onClick={this.handleClick}
             onMouseOut={this.handleMouseLeave}
             onMouseOver={this.handleMouseEnter}>
          <div className="member-pictureCtr">
            {(this.props.hoverImage && this.state.hovered) && (
                this.props.hoverImage
            )}
            {!(this.props.hoverImage && this.state.hovered) && (
                <img
                    className={pictureClass}
                    src={picture}
                    alt={member.username}
                />
            )}
          </div>
          <div className="member-nameCtr">
            {this.props.tightView && (
                <div>{member.username}</div>
            )}
            {!this.props.tightView && (
                <React.Fragment>
                  <div>{member.role}</div>
                  <div><strong>{member.username}</strong></div>
                </React.Fragment>
            )}
          </div>
        </div>
    );
  }
}

Member.propTypes = {
  member: MemberShape.isRequired,
  tightView: PropTypes.bool,
  hoverImage: PropTypes.node,
  onClick: PropTypes.func,
};

export default Member;
