import { Op } from 'sequelize'
import Movie from '../../models/movies/model'

function GET (req, res) {
  const id = (typeof req.params.id === 'undefined' || isNaN(req.params.id) ) ? 0 : parseInt(req.params.id)
  if(id != 0) {
    Movie.find({ where: {
      [Op.or]: [{countryId: req.user.countryId}, {countryOnly: false}],
      [Op.and]: [{id: id}]
    } }).then(movies => {
      res.json({error: false, data: movies})
    })
  } else {
    Movie.findAll({ where: {
      [Op.or]: [{countryId: req.user.countryId}, {countryOnly: false}]
    } }).then(movies => {
      res.json({error: false, data: movies})
    })
  }
  
}

module.exports = {
  GET
}
