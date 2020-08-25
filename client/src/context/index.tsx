import React, { createContext, useReducer, Dispatch } from 'react';

type ChannelType = {
    id: number;
    name: string;
}

type InitialStateType = {
    channels: ChannelType[];
}

const initialState: InitialStateType = {
    channels: []
};

const AppContext = createContext<{ state: InitialStateType }>({ state: initialState });

const AppProvider: React.FC = ({ children }) => {
    const [appState, setAppState] = React.useState(initialState);
    return (
        <AppContext.Provider value={{state: appState}}>
            {children}
        </AppContext.Provider>
    )
};

export { AppProvider, AppContext };