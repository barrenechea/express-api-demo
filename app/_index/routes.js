import express from 'express';
import Country from '../models/countries/model.js';
import User from '../models/user/model.js';
import Movie from '../models/movies/model.js';

const app = express.Router();

app.all('/', (req, res) => {
  res.json({ error: false, data: { message: `Hello${req.jwt ? `, ${req.jwt.claims.sub}` : ' from the API!'}` } });
});

// Route to run migrations over configured database
app.all('/migrate', (req, res) => {
  // Run countries migration
  Country.sync({ force: true }).then(() => {
    Country.create({
      name: 'United States',
    }).then(() => {
      Country.create({
        name: 'Chile',
      });
    }).then(() => {
      // Run users migration
      User.sync({ force: true }).then(() => {
        User.create({
          sub: 'john@test.com',
          displayName: 'John Doe',
          countryId: 2,
        });
      }).then(() => {
        // Run movies migration
        Movie.sync({ force: true }).then(() => {
          Movie.create({
            name: 'United States Movie only',
            url: 'http://dummymovie.test/us/1.mp4',
            watchCounter: 0,
            countryOnly: true,
            countryId: 1,
          }).then(() => {
            Movie.create({
              name: 'Chilean Movie (All countries)',
              url: 'http://dummymovie.test/us/1.mp4',
              watchCounter: 0,
              countryOnly: false,
              countryId: 2,
            });
          }).then(() => {
            res.json({ error: false, data: { message: 'Migration successfully executed' } });
          });
        });
      });
    });
  });
});

export default app;
