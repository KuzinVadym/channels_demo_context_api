import React from 'react';
import PropTypes from 'prop-types';

import style from './channeltitle.css';

const ChannelTitle = ({ title }) => (
  <div className={style.main}>
    {title}
  </div>
);

ChannelTitle.propTypes = {
  title: PropTypes.string,
};

ChannelTitle.defaultProps = {
  title: '',
};

export default ChannelTitle;
