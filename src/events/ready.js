
//ready.js
const { client } = require('../config');

module.exports = () => {
  client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
};