import { Client, Intents } from 'discord.js';
import { hookRouter } from './hooks/hooks';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    client.user.setActivity({ type: 'WATCHING', name: '999' });
});

client.on('messageCreate', async (msg) => {
    hookRouter(msg);
});

const token = process.env.TOKEN;
if (token) {
    client.login(token);
}