// 3p
import * as React from 'react';
import PropTypes from 'prop-types';

// project
import './MemberSelectorOption.css';
import { MemberShape } from '../../shapes';
import Member from '../Member/Member';

const MemberSelectorOption = props => {
  const { member } = props;
  return <Member member={member} tightView={true} onClick={props.onAdd} />;
};

MemberSelectorOption.propTypes = {
  member: MemberShape.isRequired,
  onAdd: PropTypes.func,
};

export default MemberSelectorOption;
