import OktaJwtVerifier from '@okta/jwt-verifier';
import config from '../../config.js';
import User from '../models/user/model.js';

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `${config.oktaUrl}/oauth2/default`,
  assertClaims: {
    aud: 'api://default',
  },
});

async function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    res.status(401).end();
    return;
  }

  try {
    const jwt = await oktaJwtVerifier.verifyAccessToken(match[1]);
    req.jwt = jwt;
    const user = await User.findOrCreate({
      where: { sub: jwt.claims.sub },
      include: [{ all: true }],
      defaults: { displayName: jwt.claims.firstName, countryId: 2 },
    });
    req.user = user[0].toJSON();
    next();
  } catch (err) {
    res.status(401).send(err.message);
  }
}

export default authenticationRequired;
