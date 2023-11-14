
//audioUtils.js
const { audioPlayer } = require('../config');
const { createAudioResource } = require('@discordjs/voice');

function playAudio(stream) {
  const resource = createAudioResource(stream);
  audioPlayer.play(resource);
}

module.exports = { playAudio };
