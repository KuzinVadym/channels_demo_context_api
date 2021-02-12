import { createChannelsService } from './channels/services/http/channels';
import { IService } from './shared/interfaces/IService';

export function createHttpServices(): IService[] {
  return [createChannelsService()];
}
