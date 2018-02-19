let   SECRET
let   SECRET_ENCRYPT
let   API_PORT
const env = process.env.NODE_ENV || 'development'

switch (env) {
  case 'production':
    SECRET = process.env.SECRET
    SECRET_ENCRYPT = process.env.SECRET_ENCRYPT

    API_PORT = process.env.API_PORT
    break

  case 'development':
    SECRET = 'ultrasecretkey'
    SECRET_ENCRYPT = 'blahh'

    API_PORT = '3000'
    break
  default:
    break
}

module.exports = {
  secret: SECRET,
  secretEncrypt:SECRET_ENCRYPT,
  apiPort:API_PORT
}
