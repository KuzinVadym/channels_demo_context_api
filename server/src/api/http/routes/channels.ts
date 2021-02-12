import express, { Router } from 'express';

import { IRouterBuilder } from '../../../interfaces/infrastructural';
import { IChannelsService } from '../../../domains/channels/services/http/channels';

export const channelsRoutes: IRouterBuilder = (
  service: IChannelsService
): Router => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const result = await service.getChannels();
    res.json(result);
  });

  return router;
};
