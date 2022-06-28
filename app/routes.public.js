import index from './_index/routes.js';
import user from './models/user/public.routes.js';
import country from './models/countries/public.routes.js';
import movies from './models/movies/public.routes.js';

/*
* All public routes
*/
const routes = [
  index,
  user,
  country,
  movies,
];

export default routes;
