const ExceptionError = (message: string, code: number) => Object
  .assign(new Error(), { message, code });

export default ExceptionError;
