import React, { useContext, useEffect } from 'react';
import { hot } from 'react-hot-loader';

import AppContext from '../../context';
import Channels from '../Channels';

import style from './app.css';

const App = () => {
  const appContextValue = useContext(AppContext);
  
  const {
    channels, favorites, loadChannels, togleChannel,
  } = appContextValue;
  
  useEffect(() => {
    loadChannels();
  }, channels.length);
  
  return (
    <div className={style.app}>
      <Channels channels={channels} togleChannel={togleChannel} />
      <Channels channels={favorites()} togleChannel={togleChannel} />
    </div>
  );
};

export default hot(module)(App);
