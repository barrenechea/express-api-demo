let   OKTA_URL
let   API_PORT
const env = process.env.NODE_ENV || 'development'

switch (env) {
  case 'production':
    OKTA_URL = process.env.OKTA_URL

    API_PORT = process.env.API_PORT
    break

  case 'development':
    OKTA_URL = 'https://dev-638725.oktapreview.com'

    API_PORT = '3000'
    break
  default:
    break
}

module.exports = {
  oktaUrl: OKTA_URL,
  apiPort:API_PORT
}
