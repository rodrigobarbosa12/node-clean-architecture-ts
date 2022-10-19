import { ExceptionError } from '../utils';

interface Result {
  id: number;
  message: string;
  type: string;
}

async function exemplo(): Promise<Result[]> {
  return [
    {
      id: 1,
      message: 'ok',
      type: 'Exemplo'
    },
    {
      id: 2,
      message: 'ok',
      type: 'Exemplo'
    }
  ];
}

async function exemploError(): Promise<Result[]> {
  throw ExceptionError('Thrown exception', 401);
}

export default {
  exemplo,
  exemploError
};
