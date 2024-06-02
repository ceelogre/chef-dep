/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import Base from '@src/core/base/base';
import { TResponse } from '@src/core/interfaces/routeInterface';

abstract class BaseModule extends Base {
  protected created(res: Response, data: any): Response {
    return this.success(res, this.CREATED_CODE, this.CREATED_MSG, data);
  }

  protected done(res: Response, data: any): Response<TResponse> {
    return this.success(res, this.SUCCESS_CODE, this.SUCCESS_MSG, data);
  }

  protected badRequest(res: Response): Response<TResponse> {
    return this.error(res, this.BAD_REQUEST_CODE, this.BAD_REQUEST_MSG);
  }

  protected unauthorized(res: Response): Response<TResponse> {
    return this.error(res, this.UNAUTHORIZED_CODE, this.UNAUTHORIZED_MSG);
  }

  protected notFound(res: Response): Response<TResponse> {
    return this.error(res, this.NOT_FOUND_CODE, this.NOT_FOUND_MSG);
  }

  protected abstract module(req: Request, res: Response): Promise<void | any>;

  public async execute(req: Request, res: Response): Promise<void | any> {
    try {
      return await this.module(req, res);
    } catch (err: any) {
      return null;
    }
  }
}

export default BaseModule;
