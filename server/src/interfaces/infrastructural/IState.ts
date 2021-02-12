import { ILogger } from './ILogger';
import { IServices } from './IServices';

export interface IState {
  logger?: ILogger;
  services: IServices;
}
