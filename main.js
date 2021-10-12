const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Altabot reporting for duty!');
});

client.login('ODk3MjY2MDc4NjcyMTA5NTg4.YWTKJw.eSffNAZfgzyEfS2NamZT6JYktaE');