
//index.js
const { client } = require('./config');
const messageCreateEvent = require('./events/messageCreate');
const { playAudio } = require('./audio/audioUtils');
require ('dotenv').config();
const readyEvent = require('./events/ready');
const { handleMessages } = require('./events/messageCreate');

readyEvent();
client.on('messageCreate', (message) => {
  handleMessages(message);
});

client.login("MTE3MzcxNTQzNjU2NzgwNjA1Mg.GvPJw7.BBe0nDVfd-_nRVUmq1RuhpKf9B88JN62400aVc");

