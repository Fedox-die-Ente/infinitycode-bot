const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')

const client = new DiscordJS.Client({
    partials: ['MESSAGE', 'REACTION']
})

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
        .setMongoPath('mongodb+srv://admin:florian2605@cluster0.kdkwn.mongodb.net/infinitycode?retryWrites=true&w=majority')

    console.log('Der Bot wurde gestartet.')
})

client.login("ODMyMzIxNjQ3ODcxNjU1OTQ2.YHiF8A.yCC3mEHoelnIPiNAhUc7M4zL3PQ")