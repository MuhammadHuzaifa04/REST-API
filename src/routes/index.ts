import { NextFunction, Request, Response, Router } from 'express';
import AuthAPI from './auth.route';
import UserAPI from './user.route';

export default class API {
  router: Router;
  routeGroups: any[];

  constructor() {
    this.router = Router();
    this.routeGroups = [];
    this.loadRouteGroups();
    this.registerGroups();
  }

  // Load all route groups
  loadRouteGroups() {
    this.routeGroups.push(new AuthAPI());
    this.routeGroups.push(new UserAPI());
  }

  // Register all route groups under /api
  registerGroups() {
    this.routeGroups.forEach(rgr => {
      this.router.use('/api' + rgr.getRouterGroup(), rgr.getRouter());
    });
  }

  // Get main router
  getRouter() {
    return this.router;
  }
}
