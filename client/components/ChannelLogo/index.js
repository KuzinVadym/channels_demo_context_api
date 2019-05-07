import React from 'react';
import PropTypes from 'prop-types';

import { AvatarIcon } from '../icons';

import style from './channellogo.css';

const ChannelLogo = ({ logo_token }) => (
  <div className={style.main}>
    {(logo_token)
      ? <img className={style.img} src={`https://images.zattic.com/logos/${logo_token}/white/240x135.png`} alt="" />
      : <AvatarIcon />
    }
  </div>
);

ChannelLogo.propTypes = {
  logo_token: PropTypes.string,
};

ChannelLogo.defaultProps = {
  logo_token: undefined,
};

export default ChannelLogo;
