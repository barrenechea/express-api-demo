// Dependencies injection
// =============================================================================
import express from 'express';
import cors from 'cors';
import config from './config.js';
import okta from './app/middlewares/okta.js';

// Public and Private paths
// =============================================================================
import publicRoutes from './app/routes.public.js';
import privateRoutes from './app/routes.private.js';

// Initialize app
// =============================================================================
const app = express();

// Middlewares
// =============================================================================
app.use(cors());
app.use(express.json());

// Inject routes - Public and Private
// =============================================================================
publicRoutes.forEach((p) => app.use('/', p));
privateRoutes.forEach((p) => app.use('/private', okta, p));

// Run the app
// =============================================================================
app.listen(config.apiPort, () => { console.log(`API running over http://localhost:${config.apiPort}`); }); // eslint-disable-line no-console

export default app;
