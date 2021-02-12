import { Router } from 'express';
import { IService } from '../../domains/shared/interfaces/IService';

export type IRouterBuilder = (service: IService) => Router;
