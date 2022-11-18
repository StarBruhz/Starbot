const {Client, GatewayIntentBits} = require('discord.js');
const Token = require('./Data.json')
const client = new Client({intents: GatewayIntentBits.Guilds});

client.on('ready', () => {
    console.log(`Logged in as: ${client.user.username}`);
    client.user.setActivity()
});

client.login(`MTAyOTgxNDAyNTI0MjAzNDE4Ng.GQDQ6D.LodOKzzVb_NQTdgscs4EdwOsjBMhauvJZlqTug`);