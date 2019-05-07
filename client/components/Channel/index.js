import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

const Channel = ({
  children, channel, togleChannel,
}) => useMemo(() => (
  <div className={style.main} onClick={() => togleChannel(channel)}>
    {children}
  </div>
), [channel]);

export default Channel;

Channel.propTypes = {
  children: PropTypes.array.isRequired,
  channel: PropTypes.object,
  togleChannel: PropTypes.func,
};

Channel.defaultProps = {
  channel: {},
  togleChannel: null,
};
