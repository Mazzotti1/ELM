// events/messageCreate.js
const { joinVoiceChannel, createAudioResource } = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const { client, audioPlayer } = require('../config');  // Adicione audioPlayer à importação
const { playAudio } = require('../audio/audioUtils');

async function handleMessages(message) {
  if (message.content.startsWith('!play')) {
    const args = message.content.split(' ');
    if (args.length < 2) {
      return message.reply('Você precisa fornecer um link do YouTube ou o nome da música!');
    }

    const voiceChannel = message.member?.voice.channel;
    if (!voiceChannel) {
      return message.reply('Você precisa estar em um canal de voz para usar esse comando!');
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    const songInfo = await ytdl.getInfo(args[1]);
    const stream = ytdl(args[1], { filter: 'audioonly' });
    const resource = createAudioResource(stream);

    connection.subscribe(audioPlayer);
    audioPlayer.play(resource);

    message.reply(`Reproduzindo agora: ${songInfo.title}`);
  }
}

client.on('messageCreate', handleMessages);

module.exports = { handleMessages };
