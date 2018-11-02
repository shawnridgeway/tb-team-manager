// 3p
import PropTypes from 'prop-types';

/* --- Shapes of Data --- */
export const MemberShape = PropTypes.shape({
  id: PropTypes.number,
  username: PropTypes.string,
  role: PropTypes.oneOf(['Admin', 'Internal', 'External']),
  picture: PropTypes.string,
});
