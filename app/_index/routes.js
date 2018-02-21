import express from 'express'
const app = express.Router()

app.all( '/', (req,res) => {
  res.json({ error: false, data: { message: `Hello${req.jwt ? ', ' + req.jwt.claims.sub : ' from the API!'}`} })
})

export default app
