const { NODE_ENV, OKTA_URL, API_PORT } = process.env;
const env = NODE_ENV ?? 'development';

const configMap = {
  production: {
    oktaUrl: OKTA_URL,
    apiPort: API_PORT,
  },
  development: {
    oktaUrl: 'https://dev-638725.oktapreview.com',
    apiPort: '3000',
  },
};

const config = configMap[env] ?? configMap.development;

export default config;
