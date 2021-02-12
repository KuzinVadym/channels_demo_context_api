import pathUtils from '../resources/path-utils';
import headers from '../resources/headers';

/* Load Channels */
const getChannelsUrl = `${pathUtils.channelsPath()}`;
const getChannelsHeader = () => (headers.getHeader()) as RequestInit;
export const getChannels = () => fetch(getChannelsUrl, getChannelsHeader()).then(response => response.json());
/* Load Channels End */