import {
  ChannelsResolver,
  IChannelsResolver
} from '../../resolvers/http/ChannelsResolver';
import { IGetChannelsResponse } from '../../types/IGetChannelsResponse';
import { IGetChannelsPayload } from '../../types/IGetChannelsPayload';
import { IService } from '../../../shared/interfaces/IService';

export interface IChannelsService extends IService {
  getChannels(payload?: IGetChannelsPayload): Promise<IGetChannelsResponse>;
}

class ChannelsService implements IChannelsService {
  constructor(
    readonly name: string,
    readonly channelsResolver: IChannelsResolver
  ) {}

  public async getChannels(
    payload?: IGetChannelsPayload
  ): Promise<IGetChannelsResponse> {
    try {
      const result = await this.channelsResolver.getChannels(payload);
      return {
        data: result,
        success: true
      };
    } catch (error) {
      return {
        error,
        success: false,
        status: error.status
      };
    }
  }
}

export function createChannelsService(): IChannelsService {
  return new ChannelsService('channels', new ChannelsResolver());
}
