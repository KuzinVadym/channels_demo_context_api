import express, { Router } from 'express';
import { channelsRoutes } from './channels';
import { IMainRoutes } from '../../../interfaces/infrastructural';

function validateDomain(domainsList: string[], domainName: string): void {
  if (!domainsList.includes(domainName)) {
    throw new Error(
      `Can't find domain name ${domainName} among available services`
    );
  }
}

function applyService(domain: string, getState) {
  validateDomain(
    getState().services.map(service => service.name),
    domain
  );
  return getState().services.find(service => service.name === domain);
}

export const mainRoutes: IMainRoutes = (getState): Router => {
  const router = express.Router();

  router.use('/channels', channelsRoutes(applyService('channels', getState)));

  return router;
};
