import { Router } from 'express';
import controller from './controllers/exemplo';

const routes = Router();

/**
 * Exemplo
 */
 routes.get('/exemplo', controller.exemplo);
 routes.get('/exemplo-error', controller.exemploError);

export default routes;
