import React from 'react';
import PropTypes from 'prop-types';

import { StarIcon, EmptyStarIcon } from '../icons';
import style from './channelicon.css';

const ChannelIcon = ({ selected }) => (
  <div className={style.main}>
    {(selected) ? <StarIcon /> : <EmptyStarIcon />}
  </div>
);

ChannelIcon.propTypes = {
  selected: PropTypes.bool,
};

ChannelIcon.defaultProps = {
  selected: false,
};

export default ChannelIcon;
