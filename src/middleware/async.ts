import {Request, Response, NextFunction, RequestHandler} from 'express'


const asyncWrapper = (fn: RequestHandler): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

export default asyncWrapper;
