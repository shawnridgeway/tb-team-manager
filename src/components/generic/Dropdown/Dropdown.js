// 3p
import * as React from 'react';
import PropTypes from 'prop-types';

// project
import './Dropdown.css';

class Dropdown extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.handleGlobalClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleGlobalClick, false);
  }

  handleGlobalClick = event => {
    if (this.node.contains(event.target)) {
      return;
    }
    this.props.onClose();
  };

  render() {
    return (
      <div className="dropdown" ref={el => (this.node = el)}>
        {this.props.children}
      </div>
    );
  }
}

Dropdown.propTypes = {
  onClose: PropTypes.func,
};

export default Dropdown;
