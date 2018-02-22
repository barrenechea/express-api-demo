import OktaJwtVerifier from '@okta/jwt-verifier'
import config from '../../config'
import User from '../models/user/model'

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `${config.oktaUrl}/oauth2/default`,
  assertClaims: {
    aud: 'api://default',
  },
})

function authenticationRequired (req, res, next) {
  const authHeader = req.headers.authorization || ''
  const match = authHeader.match(/Bearer (.+)/)

  if (!match) {
    return res.status(401).end()
  }

  return oktaJwtVerifier.verifyAccessToken(match[1])
    .then(jwt => {
      req.jwt = jwt
      User.findOrCreate({where: {sub: jwt.claims.sub}, include: [ { all: true } ], defaults: {displayName: jwt.claims.firstName, countryId: 2}})
        .then(user => {
          req.user = user[0].toJSON()
          next()
        })
    })
    .catch(err => {
      res.status(401).send(err.message)
    })
}

export default authenticationRequired
