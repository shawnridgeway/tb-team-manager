// 3p
import * as React from 'react';

// project
import './App.css';
import TeamManager from '../../components/TeamManager/TeamManager.js';
import PropTypes from 'prop-types';
import { MemberShape } from '../../shapes';

class App extends React.Component {
  static propTypes = {
    allMembers: PropTypes.arrayOf(MemberShape),
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedMembers: [],
    };
  }

  handleAddMember = memberId => {
    this.setState(prevState => {
      const dedupedMembers = prevState.selectedMembers.filter(
        member => member !== memberId
      );
      return {
        selectedMembers: [...dedupedMembers, memberId],
      };
    });
  };

  handleRemoveMember = memberId => {
    this.setState(prevState => {
      return {
        selectedMembers: prevState.selectedMembers.filter(
          member => member !== memberId
        ),
      };
    });
  };

  render() {
    return (
      <TeamManager
        allMembers={this.props.allMembers}
        selectedMembers={this.state.selectedMembers}
        onAddMember={this.handleAddMember}
        onRemoveMember={this.handleRemoveMember}
      />
    );
  }
}

export default App;
