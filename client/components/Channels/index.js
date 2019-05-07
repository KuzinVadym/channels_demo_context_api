import React from 'react';
import PropTypes from 'prop-types';

import Channel from '../Channel';
import ChannelNumber from '../ChannelNumber';
import ChannelLogo from '../ChannelLogo';
import ChannelTitle from '../ChannelTitle';
import ChannelIcon from '../ChannelIcon';

import style from './style.css';

const Channels = ({ channels, togleChannel }) => (
  <div className={style.main}>
    {channels.map((channel, index) => (
      <Channel key={`favorite_${index + 2}`} index={index} channel={channel} togleChannel={togleChannel}>
        <ChannelNumber index={index + 1} />
        <ChannelLogo logo_token={channel.logo_token} />
        <ChannelTitle title={channel.title} />
        <ChannelIcon selected={channel.selected} />
      </Channel>
    ))}
  </div>
);

export default Channels;

Channels.propTypes = {
  channels: PropTypes.array,
  togleChannel: PropTypes.func,
};

Channels.defaultProps = {
  channels: [],
  togleChannel: null,
};
