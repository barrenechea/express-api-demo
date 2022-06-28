import express from 'express';
import { GET } from './controller.js';

const app = express.Router();

app.route('/whoami')
  .get(GET);

export default app;
