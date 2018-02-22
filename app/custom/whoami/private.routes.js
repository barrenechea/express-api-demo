import controller from './controller'
import express from 'express'
const app = express.Router()

app.route('/whoami')
  .get    ((req,res) => controller.GET(req, res))

export default app
