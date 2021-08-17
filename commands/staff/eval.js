const Discord = require('discord.js')


module.exports = {
    category: 'staff',
    aliases: 'h',
    description: 'Sende das Reaction Menü',
    ownerOnly: false,
    cooldown: '2s',
    callback: ({message, args}) => {
        message.reply('Pong')
    }
}