// 3p
import * as React from 'react';
import PropTypes from 'prop-types';

// project
import './TeamManager.css';
import Card from '../generic/Card/Card.js';
import NewMember from '../NewMember/NewMember.js';
import Member from '../Member/Member.js';
import { MemberShape } from '../../shapes.js';
import MemberRemoveButton from '../MemberRemoveButton/MemberRemoveButton';

class TeamManager extends React.Component {
  static propTypes = {
    selectedMembers: PropTypes.arrayOf(PropTypes.number),
    allMembers: PropTypes.arrayOf(MemberShape),
    onAddMember: PropTypes.func,
    onRemoveMember: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      moreOpen: false,
    };
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.selectedMembers || newProps.selectedMembers.length <= 5) {
      this.setState({
        moreOpen: false,
      });
    }
  }

  showMore = () => {
    this.setState(prevState => ({
      moreOpen: !prevState.moreOpen,
    }));
  };

  renderMembers = () => {
    return this.props.selectedMembers
      .slice(0, !this.state.moreOpen ? 5 : undefined)
      .map(memberId => {
        const member = this.props.allMembers.reduce(
          (res, mem) => (mem.id === memberId ? mem : res),
          null
        );
        if (!member) {
          return null;
        }
        const button = (
          <MemberRemoveButton
            member={member}
            onRemoveMember={this.props.onRemoveMember}
          />
        );
        return <Member key={memberId} member={member} hoverImage={button} />;
      });
  };

  render() {
    return (
      <Card>
        <h6 className="teamManager-header">
          Your Team for this Test
          <button className="teamManager-teamPageButton btn-sm">
            Team Page
          </button>
        </h6>
        <div className="teamManager-memberCtr">
          <NewMember
            onAdd={this.props.onAddMember}
            allMembers={this.props.allMembers}
            selectedMembers={this.props.selectedMembers}
          />
          {this.renderMembers()}
        </div>
        {(this.props.selectedMembers && this.props.selectedMembers.length) >
          5 && (
          <div
            className="teamManager-showMore bg-light"
            onClick={this.showMore}
          >
            {this.state.moreOpen ? (
              <React.Fragment>
                Show Less <i className="icon icon-chevron-up text-muted" />
              </React.Fragment>
            ) : (
              <React.Fragment>
                Show More <i className="icon icon-chevron-down text-muted" />
              </React.Fragment>
            )}
          </div>
        )}
      </Card>
    );
  }
}

export default TeamManager;
