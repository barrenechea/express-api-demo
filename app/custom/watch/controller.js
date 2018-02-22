import { Op } from 'sequelize'
import Movie from '../../models/movies/model'

function GET (req, res) {
  const id = (typeof req.params.id === 'undefined' || isNaN(req.params.id) ) ? 0 : parseInt(req.params.id)
  if(id != 0) {
    Movie.find({ where: {
      [Op.or]: [{countryId: req.user.countryId}, {countryOnly: false}],
      [Op.and]: [{id: id}]
    } }).then(movie => {
      if(movie == null) {
        res.status(404).json({error: true, data: 'Movie doesnt exists or is blocked for your country'})
      } else {
        movie.updateAttributes({
          watchCounter: movie.watchCounter + 1
        }).then(updatedMovie => {
          res.json({error: false, data: updatedMovie})
        })
      }
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
