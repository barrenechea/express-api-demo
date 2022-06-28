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
    name: req.body.name,
  })
    .then((entity) => {
      res.json({ error: false, data: entity });
    });
}

export function PUT(req, res) {
  Model.findById(req.params.id).then((entity) => {
    entity.updateAttributes({
      name: (typeof req.body.name === 'undefined') ? entity.name : req.body.name,
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
