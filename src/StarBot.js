const {Client, GatewayIntentBits} = require('discord.js');
const {dotenv} = require('dotenv');
const {token} = require('./config.json')
const client = new Client({intents: GatewayIntentBits.Guilds});

client.on('ready', () => {
    console.log(`Logged in as: ${client.user.username}`);
    client.user.setActivity()
});

client.login(token);