import index from './_index/routes'
import whoami from './custom/whoami/private.routes'
import watch from './custom/watch/private.routes'
/*
* All private routes
*/
const routes = [
  index,
  whoami,
  watch
]

export default routes
