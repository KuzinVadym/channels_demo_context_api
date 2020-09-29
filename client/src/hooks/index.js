export { useLoadChannels } from './channels ';

interface ILoadCarData {
    type: 'LOAD_CAR_DATA';
    payload: ICar;
}

interface ISetCarLoadingData {
    type: 'SET_CAR_LOADING_DATA';
    payload: boolean;
}

interface ISetCarLoadingDataError {
    type: 'SET_CAR_LOADING_DATA_ERROR';
    payload: string;
}