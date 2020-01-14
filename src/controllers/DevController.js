const Dev = require('../models/Dev');
const axios = require('axios');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      const user_github = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name = login, avatar_url, bio } = user_github.data;
      const techsArray = parseStringAsArray(techs);
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };
      dev = await Dev.create({
        name,
        github_username,
        bio,
        avatar_url,
        stacks: techsArray,
        location
      });
    }
    return res.json(dev);
  },

  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async destroy(req, res) {
    const { github_username } = req.body;
    let dev = await Dev.findOne({ github_username });
    if (dev) {
      dev = await Dev.findOneAndDelete({
        github_username
      });
      return res.json(dev);
    }
    return res.json({ title: 'Error', message: 'User not found!' });
  }
};
