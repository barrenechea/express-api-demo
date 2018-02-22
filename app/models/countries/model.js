import Sequelize from 'sequelize'
import sequelize from '../../sequelize'

const Country = sequelize.define('country', {
  // Country name
  name: {
    type: Sequelize.STRING
  }
})

export default Country
