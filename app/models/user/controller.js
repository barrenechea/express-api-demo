import Model from './model.js';

export function GET(req, res) {
  const id = (typeof req.params.id === 'undefined' || Number.isNaN(req.params.id)) ? 0 : Number.parseInt(req.params.id, 10);
  if (id !== 0) {
    Model.findById(id).then((entity) => {
      res.json({ error: false, data: entity });
    });
  } else {
    Model.findAll().then((entities) => {
      res.json({ error: false, data: entities });
    });
  }
}

export function POST(req, res) {
  Model.create({
    sub: req.body.sub,
    displayName: req.body.displayName,
    userId: req.body.userId,
    countryId: req.body.countryId,
  })
    .then((entity) => {
      res.json({ error: false, data: entity });
    });
}

export function PUT(req, res) {
  Model.findById(req.params.id).then((entity) => {
    entity.updateAttributes({
      sub: (typeof req.body.sub === 'undefined') ? entity.sub : req.body.sub,
      displayName: (typeof req.body.displayName === 'undefined') ? entity.displayName : req.body.displayName,
      userId: (typeof req.body.userId === 'undefined') ? entity.userId : req.body.userId,
      countryId: (typeof req.body.countryId === 'undefined') ? entity.countryId : req.body.countryId,
    }).then(() => {
      res.json({ error: false, data: entity });
    });
  });
}

export function DELETE(req, res) {
  Model.findById(req.params.id).then((entity) => {
    entity.destroy()
      .then(() => {
        res.json({ error: false, data: 'Entity deleted' });
      });
  }).catch(() => {
    res.status(404).json({ error: true, data: { message: 'Object not found' } });
  });
}
