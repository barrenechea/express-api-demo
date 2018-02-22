import index from './_index/routes'
import user from './models/user/public.routes'
import country from './models/countries/public.routes'
import movies from './models/movies/public.routes'

/*
* All public routes
*/
const routes = [
  index,
  user,
  country,
  movies
]

export default routes
