import express, { Express } from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import { Logger } from 'pino';
import {
  IMainRoutes,
  IRootService,
  ISettings,
  IState
} from './interfaces/infrastructural';
import { IService } from './domains/shared/interfaces/IService';

export class RootService implements IRootService {
  private app: Express;
  private services: IService[];

  constructor(readonly settings: ISettings, readonly logger: Logger) {}

  public getState(): IState {
    return {
      logger: this.logger,
      services: this.services
    };
  }

  // create Koa application server
  public init(): void {
    this.logger.info('Init Express App');
    this.app = express();

    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(cors());
  }

  initTests(_mainRoutes: IMainRoutes): Express {
    return undefined;
  }

  withHttpServices(services: IService[]): void {
    this.services = services;
  }

  // listen server
  withRest(mainRoutes: IMainRoutes): void {
    const getState = () => {
      return this.getState();
    };
    const mainRouter = mainRoutes(getState);
    this.app.use('/api/v1', mainRouter);
  }

  // listen server
  public listen(): void {
    const port = this.settings.port;
    this.logger.info(`Application running on port: ${this.settings.port}`);
    // @ts-ignore
    this.app.listen(this.settings.port, err => {
      if (err) this.logger.error(err.message);
      this.logger.info(
        `==> 🌎 Listening on port %s. Open up http://127.0.0.1:${port} in your browser.`
      );
    });
  }
}
