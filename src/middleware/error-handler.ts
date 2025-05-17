import { CustomAPIError} from "../errors/custom-error";
import { Response, Request, NextFunction } from "express";

const errorHandlerMiddleware = (err: Error, res: Response, req: Request, next: NextFunction): Response => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

export default errorHandlerMiddleware
