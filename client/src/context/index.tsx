import React, {createContext, useContext, useReducer} from 'react';
import {getInitialState, reducer} from './reducer'
import createActions from "./actions";
import { IActions, IState } from "../interfaces";

type IContext = [IState, IActions] | [];

const AppContext = createContext<IContext>([]);

const AppProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, getInitialState());
    const actions = createActions(dispatch);

    return (
        <AppContext.Provider value={[state, actions]}>
            {children}
        </AppContext.Provider>
    )
};

export { AppProvider, AppContext };