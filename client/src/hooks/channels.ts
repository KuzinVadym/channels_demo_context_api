import React, {useCallback, useContext, useMemo} from "react";
import { IChannel } from "../interfaces";
import { fetchData } from "./hellpers";
import { AppContext } from "../context";

interface FetchChannelsType {
    channelsLength?: number;
    channelsLoading?: boolean;
}

interface IFavoriteChannelsSelectors {
    (
        channels: IChannel[] | []
    ): IChannel[]
}

const useLoadChannels = (options: FetchChannelsType) => {

    const [{}, { loadChannels, setLoadingChannels, setLoadChannelsError }] = useContext(AppContext);

    React.useEffect(() => {
        if (!options.channelsLoading) {
            fetchData(loadChannels, setLoadingChannels, setLoadChannelsError);
        }
    }, [options.channelsLength]);
};

function useFavoriteChannelsSelectors(channels: IChannel[] | [], favoriteChannelsSelectors: IFavoriteChannelsSelectors) {
    return useMemo(() => favoriteChannelsSelectors(channels), [channels]);
}

export { useLoadChannels, useFavoriteChannelsSelectors };