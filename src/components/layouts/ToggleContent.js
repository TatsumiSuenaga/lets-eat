import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToggleContent = ({ toggleHandler, contentHandler }) => {
  const [isShown, setIsShown] = useState(false);
  const show = () => setIsShown(true);
  const hide = () => setIsShown(false);

  return (
    <React.Fragment>
      {toggleHandler(show)}
      {isShown && contentHandler(hide)}
    </React.Fragment>
  );
};

ToggleContent.propTypes = {
  toggleHandler: PropTypes.func.isRequired,
  contentHandler: PropTypes.func.isRequired
};

export default ToggleContent;
