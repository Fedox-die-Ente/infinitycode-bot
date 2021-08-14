const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new DiscordJS.Client({
    partials: ['MESSAGE', 'REACTION']
})
require('discord-buttons')(client)


client.on('ready', () => {
    new WOKCommands(client, {
        commandsDir: 'commands',
        featuresDir: 'events',
        messagesPath: 'messages.json',
        showWarns: true,
        del: -1,
        defaultLangauge: "german",
        ignoreBots: false,
        dbOptions: {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },

        testServers: ['875641961321758740'],

        disabledDefaultCommands: [
            // 'help',
            // 'command',
            // 'language',
            // 'prefix',
            // 'requiredrole'
        ]
    })

        .setDefaultPrefix('$')
        .setColor(0xff0000)
        .setMongoPath(`${process.env.MONGOPATH}`)
        .setBotOwner('775741196206473226')
    console.log('Der Bot wurde gestartet.')
})

client.login(process.env.TOKEN)