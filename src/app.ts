import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import API from './routes'; // your class-based API file
import { globalErrorHandler, notFoundHandler } from './middlewares';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize class-based API and mount all routes
const api = new API();
app.use(api.getRouter());

// Error handling middlewares
app.use(notFoundHandler);
app.use(globalErrorHandler);

export { app };
