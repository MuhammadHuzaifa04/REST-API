import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ERROR_CODES } from '../utils';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];
  //we use this to tell header and then authorizatinon and then token, so we split by bearer for token
  // space and get the second part which is the token.
  //instead of no token we wrote unauthorized to prevent from
  // giving too much information to potential attackers about the authentication mechanism.

  if (!token)
    return res
      .status(ERROR_CODES.UNAUTHORIZED.status)
      .json({ message: ERROR_CODES.UNAUTHORIZED.message });
  //apply this error handlng after reviewing dono.

  const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

  req.user = decoded;

  next();
};
