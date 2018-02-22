import User from '../../models/user/model'

function GET (req, res) {
  User.findOrCreate({where: {sub: req.jwt.claims.sub}, include: [ { all: true } ], defaults: {displayName: req.jwt.claims.firstName, countryId: 2}})
    .then(user => {
      res.json({error: false, data: user})
    })
}

module.exports = {
  GET
}
