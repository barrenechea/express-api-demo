import Sequelize from 'sequelize'
import sequelize from '../../sequelize'
import Country from '../countries/model'

const User = sequelize.define('user', {
  // email, obtained from Okta API
  sub: {
    type: Sequelize.STRING,
    allowNull: true
  },
  // Display name
  displayName: {
    type: Sequelize.STRING
  }
})

User.hasMany(User, {as: 'Users'})
User.belongsTo(Country)

export default User
