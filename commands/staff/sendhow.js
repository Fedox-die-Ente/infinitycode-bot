const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')
const disbut = require("discord-buttons");


module.exports = {
    category: 'staff',
    aliases: 'h',
    requiredRoles: '875685542434603059',
    description: 'Sende eine Wiki',
    ownerOnly: false,
    cooldown: '2s',
    callback: ({message, args}) => {
        if (message.channel.id === '875665999985254420') {
            let text = '[Snippet]\n**Funktion:** Test\n**Sprache:** JavaScript\n``Dein Code``\n\nBitte beachte wie du das Snippet machst ist egal solange du "[Snippet]" im Text hast!'
            let usage = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setColor(`${embed.maincolor}`)
                .setFooter(`${embed.footer}`)
                .setDescription(`${emoji.usage} | Hier findest du ein Beispiel wie du ein Snippet erstellen kannst.\n\n${text}`)
            message.channel.send(usage)
        } else if (message.channel.id === '875665787321479168') {
            let text = '[Projekt]\n**Name:** Projekt Name\n**Beschreibung:** Projektbeschreibung\n**Programmiersprache/Library:** Sprache/Library\n**Bezahlung:** Bezahlung\n**Kontakt:** Kontaktmöglichkeiten\n**Extra:** Extra Nachricht'
            let usage = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setColor(`${embed.maincolor}`)
                .setFooter(`${embed.footer}`)
                .setDescription(`${emoji.usage} | Hier findest du ein Beispiel wie du Werbung für dein Projekt machen kannst.\n\n${text}`)
            message.channel.send(usage)
        } else if (message.channel.id === '875666666535669760') {
            let text = '[Showcase]\n**Name:** Projekt Name\n**Beschreibung:** Projektbeschreibung\n**Extra:** Extra Nachricht\n\nBitte beachte wie du das Showcase machst ist egal solange du "[Showcase]" im Text hast!'
            let usage = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setColor(`${embed.maincolor}`)
                .setFooter(`${embed.footer}`)
                .setDescription(`${emoji.usage} | Hier findest du ein Beispiel wie du dein Projekt vorstellen kannst.\n\n${text}`)
            message.channel.send(usage)
        } else if (message.channel.id === '875666113239863307') {
            let text = '[Video]\n**Beschreibung:** Was machst du in den Video?\n**Extra:** Extra Nachricht\n\nBitte beachte wie du das Video vorstellst ist egal solange du "[Video]" im Text hast!'
            let usage = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setColor(`${embed.maincolor}`)
                .setFooter(`${embed.footer}`)
                .setDescription(`${emoji.usage} | Hier findest du ein Beispiel wie du dein Video vorstellen kannst.\n\n${text}`)
            message.channel.send(usage)
        }
    }
}