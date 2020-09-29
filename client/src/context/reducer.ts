import {IChannel, IState} from "../interfaces";
import {ActionTypes} from "./actions";

export const getInitialState = (): IState => ({
    channels: [],
    channels_loading: false,
    channels_error: ''
});

export function reducer(
    state: IState,
    action: ActionTypes
): IState {
    switch (action.type) {
        case 'LOAD_CHANNELS': {
            const { payload } = action;
            return {
                ...state,
                channels: payload,
            } as IState;
        }
        case 'SET_LOADING_CHANNELS': {
            const { payload } = action;
            return {
                ...state,
                channels_loading: payload,
            } as IState;
        }
        case 'SET_LOADING_CHANNELS_ERROR': {
            const { payload } = action;
            return {
                ...state,
                channels_error: payload,
            } as IState;
        }
        case 'TOGGLE_CHANNEL': {
            const { payload } = action;

            const channelIndex = state.channels.indexOf(payload);
            const newChannels = [...state.channels];
            newChannels.splice(channelIndex, 1, Object.assign({}, payload, {selected: !payload.selected}));

            return {
                ...state,
                channels: newChannels
            } as IState;
        }
        default:
            return state;
    }
}