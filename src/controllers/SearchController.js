const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, stacks } = req.query;
    const stacksArray = parseStringAsArray(stacks);
    const devs = await Dev.find({
      stacks: { $in: stacksArray },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });
    res.json(devs);
  }
};
