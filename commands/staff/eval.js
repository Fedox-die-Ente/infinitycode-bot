const Discord = require('discord.js')


module.exports = {
    category: 'staff',
    aliases: 'h',
    description: 'Sende das Reaction Menü',
    ownerOnly: false,
    requiredRoles: '875685542434603059',
    cooldown: '2s',
    callback: ({message, args}) => {
        message.reply('Pong')
    }
}