import { Request, Response } from 'express';
import service from '../../application/use-cases/exemplo';
import render from '../serializers/exemplo';
import { factoryErrorCatch } from '../utils';

async function exemplo(_req: Request, res: Response): Promise<Response> {
  try {
    const result = await service.exemplo();
    return res.send(render(result));
  } catch (error) {
    return factoryErrorCatch(res, error);
  }
};

async function exemploError(_req: Request, res: Response): Promise<Response> {
  try {
    await service.exemploError();
    return res.send();
  } catch (error) {
    return factoryErrorCatch(res, error);
  }
};

export default {
  exemplo,
  exemploError
};
