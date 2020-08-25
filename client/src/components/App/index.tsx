import React, { useContext, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader/root';

import { AppContext } from '../../context'
import theme from '../../styles';

const App = () => {
  const { state } = useContext(AppContext);
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          App
      </ThemeProvider>
  );
};

export default hot(App);
