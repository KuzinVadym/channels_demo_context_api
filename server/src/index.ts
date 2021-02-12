import pino from 'pino';

import { settings } from './settings';
import { mainRoutes } from './api/http/routes';
// import resolvers from './resolvers/rest';
import { RootService } from './rootService';
import { createHttpServices } from './domains';

const logger = pino();

try {
  const appSrv = new RootService(settings, logger);
  logger.info('Starting HTTP server');

  // Create Koa application server (app)
  appSrv.init();

  appSrv.withHttpServices(createHttpServices());

  // Calling hook for setting rest routers
  appSrv.withRest(mainRoutes);

  appSrv.listen();
} catch (e) {
  logger.error(e, 'An error occurred while initializing application.');
}
