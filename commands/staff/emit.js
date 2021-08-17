const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')

module.exports = {
    category: 'User',
    aliases: 'h',
    description: 'Hilfe Menü',
    ownerOnly: false,
    cooldown: '2s',
    callback: ({message, args, client}) => {
        if (args[0] === 'join') {
            client.emit('guildMemberAdd', message.member);
            let done = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setFooter(`${embed.footer}`)
                .setColor(`${embed.maincolor}`)
                .setDescription(`${emoji.done} | Es wurde ein Join emitiert.`)
            message.reply(done)
        }
        if (args[0] === 'boost') {
            client.emit('nitroBoost', message.member);
            let done = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setFooter(`${embed.footer}`)
                .setColor(`${embed.maincolor}`)
                .setDescription(`${emoji.done} | Es wurde ein Boost emitiert.`)
            message.reply(done)
        }
    }
}