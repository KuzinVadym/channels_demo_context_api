
export interface IChannel {
    id: string;
    title: string;
    logo_token: string;
    selected: boolean;
}

export interface IState {
    channels: IChannel[];
    channels_loading: boolean;
    channels_error: string;
}

export interface IActions {
    loadChannels: (payload: IChannel[]) => void;
    setLoadingChannels: (payload: boolean) => void;
    setLoadChannelsError: (payload: string) => void;
    toggleChannel: (payload: IChannel) => void;
}