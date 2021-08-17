const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')
const disbut = require("discord-buttons");


module.exports = {
    category: 'staff',
    aliases: 'h',
    description: 'Sende das Reaction Menü',
    ownerOnly: false,
    cooldown: '2s',
    callback: ({message, args}) => {
        if (message.channel.id === '875665999985254420') {
            let text = '[Snippet]\n**Funktion:** Test\n**Sprache:** JavaScript\n``Dein Code``\n\nBitte beachte wie du das Snippet machst ist egal solange du "[Snippet]" im Text hast!'
            const usage1 = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setColor(`${embed.maincolor}`)
                .setFooter(`${embed.footer}`)
                .setDescription(`${emoji.usage} | Hier findest du ein Beispiel wie du ein Snippet erstellen kannst.\n\n${text}`)
            message.channel.send(usage1)
        }
    }
}