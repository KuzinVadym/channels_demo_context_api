import React from 'react';
import PropTypes from 'prop-types';

import style from './channel_number.css';

const ChannelNumber = ({ index }) => (
  <div className={style.main}>
    <div className={style.number}>
      {index}
    </div>
  </div>
);

ChannelNumber.propTypes = {
  index: PropTypes.number,
};

ChannelNumber.defaultProps = {
  index: 0,
};

export default ChannelNumber;
