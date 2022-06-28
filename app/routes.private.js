import index from './_index/routes.js';
import whoami from './custom/whoami/private.routes.js';
import watch from './custom/watch/private.routes.js';
/*
* All private routes
*/
const routes = [
  index,
  whoami,
  watch,
];

export default routes;
