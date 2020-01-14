const Dev = require('../models/Dev');
const axios = require('axios');

module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      const user_github = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name = login, avatar_url, bio } = user_github.data;
      const techsArray = techs.split(',').map(tech => tech.trim());
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
  }
};
