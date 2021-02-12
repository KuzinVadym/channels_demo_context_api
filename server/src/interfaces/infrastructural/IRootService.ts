import { Express, Router } from 'express';
import { IService } from '../../domains/shared/interfaces/IService';

export type IMainRoutes = (getState) => Router;

export interface IRootService {
  init: () => void;
  initTests: (mainRoutes: IMainRoutes) => Express;
  withHttpServices: (services: IService[]) => void;
  withRest: (mainRoutes: IMainRoutes) => void;
  listen: () => void;
}
