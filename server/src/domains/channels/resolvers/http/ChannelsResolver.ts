import { IGetChannelsPayload } from '../../types/IGetChannelsPayload';
import { IChannel } from '../../types/IChannel';
import channels_dataJson from './channels_data.json';

export interface IChannelsResolver {
  getChannels(payload: IGetChannelsPayload): IChannel[];
}

export class ChannelsResolver implements IChannelsResolver {
  getChannels(payload: IGetChannelsPayload): IChannel[] {
    return channels_dataJson.channels
      .map(item => {
        if (
          item.qualities.length === 1 &&
          item.qualities[0].availability === 'available'
        ) {
          return item;
        }
        {
          const availableQualities = item.qualities
            .filter(item => item.availability === 'available')
            .sort(comparator)
            .slice(0, 1);
          if (availableQualities.length > 0) {
            item.qualities = availableQualities;
            return item;
          }
        }
      })
      .filter(item => item !== undefined);
  }
}

function eval_level(value) {
  let temp;
  switch (value) {
    case 'uhd':
      temp = 3;
      break;
    case 'hd':
      temp = 2;
      break;
    case 'sd':
      temp = 1;
      break;
    default:
      temp = 0;
  }
  return temp;
}

function comparator(a, b) {
  return eval_level(b.level) - eval_level(a.level);
}
