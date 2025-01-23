import React from 'react';
import PropTypes from 'prop-types';

export const Typo = ({ size, bold }) => {
  const style = {
    fontSize: size,
    fontWeight: bold ? 'bold' : 'normal',
  };

  return <h1 style={style}>Заголовок</h1>;
};

Typo.propTypes = {
  size: PropTypes.string,
  bold: PropTypes.bool,
};

Typo.defaultProps = {
  bold: false,
};


