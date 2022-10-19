import { Response } from 'express';


function factoryErrorCatch(res: Response, error: any) {
  if (error?.response?.data) {
    const { response: { data } } = error;
    return res.status(data.code || 400).json({ message: data.message });
  }

  if (error?.message) {
    return res.status(error.code).json({ message: error.message });
  }

  if (error?.precedingErrors?.length) {
    const { originalError: { info: { message } } } = error.precedingErrors[0];

    return res.status(400).json({ message });
  }

  return res.status(error.status || 400).json(error.message);
}

export default factoryErrorCatch;
