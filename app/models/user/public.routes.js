import express from 'express';
import {
  GET, POST, PUT, DELETE,
} from './controller.js';

const app = express.Router();

app.route('/users/:id([0-9]+)?')
  .get(GET)
  .post(POST)
  .put(PUT)
  .delete(DELETE);

export default app;
