const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')

module.exports = {
    category: 'staff',
    aliases: 'sr',
    description: 'Sende die Regeln.',
    requiredRoles: '875685542434603059',
    cooldown: '2s',
    callback: ({message, args}) => {
        message.delete()
        text = args.slice(0).join(" ");
        const info = new Discord.MessageEmbed()
            .setAuthor(`${embed.name}`, `${embed.logo}`)
            .setColor(`${embed.maincolor}`)
            .setFooter(`${embed.footer}`)
            .setDescription(text)
        message.channel.send(info)
    }
}