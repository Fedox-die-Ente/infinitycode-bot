const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')

const client = new DiscordJS.Client({
    partials: ['MESSAGE', 'REACTION']
})

client.on('ready', () => {

    new WOKCommands(client, {
        commandsDir: 'commands',
        featuresDir: 'events',
        messagesPath: '',
        showWarns: true,
        del: -1,
        defaultLangauge: "english",
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
        .setMongoPath('Your path here')
})

client.login("YOUR TOKEN HERE")