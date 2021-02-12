import React, { useContext, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader/root';
import {useFavoriteChannelsSelectors, useLoadChannels} from "../../hooks/channels";
import { AppContext } from "../../context";

import theme from '../../styles';
import useStyles from "./style";
import {IChannel} from "../../interfaces";

const App = () => {
    const classes = useStyles();
    const [{channels, channels_loading, channels_error}, ] = useContext(AppContext);

    useLoadChannels({channelsLength: channels.length, channelsLoading: channels_loading});

    const favorites: IChannel[] | [] = useFavoriteChannelsSelectors(channels, (channels) => channels.filter((item: IChannel) => item.selected));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            App
        </ThemeProvider>
    );
};

export default hot(App);
