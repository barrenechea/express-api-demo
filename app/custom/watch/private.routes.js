import express from 'express';
import { GET } from './controller.js';

const app = express.Router();

app.route('/watch/:id([0-9]+)?')
  .get(GET);

export default app;
