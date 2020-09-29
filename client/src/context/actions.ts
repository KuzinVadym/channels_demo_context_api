import React from "react";
import { IActions, IChannel } from "../interfaces";


interface ILoadChannels {
    type: 'LOAD_CHANNELS';
    payload: IChannel[];
}

interface ISetLoadingChannels {
    type: 'SET_LOADING_CHANNELS';
    payload: boolean;
}

interface ISetLoadingChannelsError {
    type: 'SET_LOADING_CHANNELS_ERROR';
    payload: string;
}

interface IToggleChannel {
    type: 'TOGGLE_CHANNEL';
    payload: IChannel;
}

export type ActionTypes =
    | ILoadChannels
    | ISetLoadingChannels
    | ISetLoadingChannelsError
    | IToggleChannel

export type DispatchType = React.Dispatch<ActionTypes>;

function createActions(dispatch: DispatchType): IActions {
    return {
        loadChannels: (payload: IChannel[]) => dispatch({ type: 'LOAD_CHANNELS', payload }),
        setLoadingChannels: (payload: boolean) => dispatch({ type: 'SET_LOADING_CHANNELS', payload }),
        setLoadChannelsError: (payload: string) => dispatch({ type: 'SET_LOADING_CHANNELS_ERROR', payload }),
        toggleChannel: (payload: IChannel) => dispatch({ type: 'TOGGLE_CHANNEL', payload }),
    };
}

export default createActions;
