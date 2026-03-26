import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { globalErrorHandler, notFoundHandler } from './middlewares';
import dotenv from 'dotenv';
dotenv.config();
import { no } from 'zod/v4/locales';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use(notFoundHandler);
app.use(globalErrorHandler);

export { app };
