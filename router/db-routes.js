const db = require('../models');

module.exports = (app) => {
  // app.get('/env', (req, res) => {
  //   res.json(process.env.REACT_APP_OPEN_WEATHER_APIKEY);
  // });
  // GET route for all of the spots data
  app.get('/db/spots', (req, res) => {
    // .findAll to get all the data from mySQL database
    db.spots.findAll({})
      .then((spots) => res.json(spots))
        .catch((err) => res.stats(401).json(err));
  });

  app.get('/db/spots/:id', (req, res) => {
    db.spots.findOne({
      where: {
        id: req.params.id
      },
    }).then((spot) => res.json(spot))
        .catch((err) => res.stats(401).json(err));
  });

  // POST route for add new spots info
  app.post('/db/spots', (req, res) => {
    // .create to add new data to mySQL database
    db.spots.create({
      name: req.body.name,
      city: req.body.city,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      cross_street: req.body.cross_street,
      description: req.body.description,
      security_guards: req.body.security_guards,
      security_when: req.body.security_when
    }).then((spot) => res.json(spot))
        .catch((err) => res.stats(401).json(err));
  });
  // PUT route for update spots info
  app.put('/db/spots', (req, res) => {
    // .update to update the data from mySQL database
    db.spots.update({
      name: req.body.name,
      city: req.body.city,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      cross_street: req.body.cross_street,
      description: req.body.description,
      security_guards: req.body.security_guards,
      security_when: req.body.security_when
    }, {
      // conditions
      where: {
        id: req.body.id
      },
    }).then((spot) => res.json(spot))
      .catch((err) => res.stats(401).json(err));
  });

};
