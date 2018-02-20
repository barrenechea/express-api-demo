import OktaJwtVerifier from '@okta/jwt-verifier'
import config from '../../config'

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
      next()
    })
    .catch(err => {
      res.status(401).send(err.message)
    })
}

export default authenticationRequired
