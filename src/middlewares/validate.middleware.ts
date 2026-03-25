// validate.middleware.ts
import { ZodType, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validateReqBody =
  (schema: ZodType<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body); // validate req.body
      next();
    } catch (err: any) {
      if (err instanceof ZodError) {
        // map Zod issues to field & message
        const errors = err.issues.map(e => ({
          field: e.path.join('.'),
          message: e.message,
        }));
        return res.status(400).json({ success: false, errors });
      }
      // fallback server error
      return res.status(500).json({ success: false, message: 'Server Error' });
    }
  };
