import Sequelize from 'sequelize';
import sequelize from '../../sequelize.js';
import Country from '../countries/model.js';

const Movie = sequelize.define('movie', {
  // Movie name
  name: {
    type: Sequelize.STRING,
  },
  // URL
  url: {
    type: Sequelize.STRING,
  },
  // Watch counter
  watchCounter: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  // Defines if this movie is restricted to the assigned country
  countryOnly: {
    type: Sequelize.BOOLEAN,
  },
});

Movie.belongsTo(Country);

export default Movie;
