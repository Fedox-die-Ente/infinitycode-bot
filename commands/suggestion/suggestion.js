const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')
const suggestionSchema = require('../../schemas/suggestions-schema')
const {statusMessages, suggestionCache} = require('../../events/suggestion')

module.exports = {
    category: 'User',
    aliases: 'h',
    description: 'Hilfe Menü',
    ownerOnly: false,
    cooldown: '2s',
    callback: async ({message, args}) => {
        const {guild} = message

        const messageId = args.shift()
        const status = args.shift().toUpperCase()
        const reason = args.join(' ')

        message.delete()

        const newStatus = statusMessages[status]

        if (!newStatus) {
            let error = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setColor(`${embed.maincolor}`)
                .setFooter(`${embed.footer}`)
                .setDescription(`${emoji.error} | Unbekannter Status bitte benutze ${Object.keys(statusMessages)}`)
            message.reply(
                error
            )
            return
        }

        const channelId = suggestionCache()[guild.id]
        if (!channelId) {
            let error = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setColor(`${embed.maincolor}`)
                .setFooter(`${embed.footer}`)
                .setDescription(`${emoji.error} | Ein Fehler wurde erkannt er wurden den Entwicklern gemeldet.`)
            message.reply(
                error
            )
            return
        }

        const channel = guild.channels.cache.get(channelId)
        if (!channel) {
            let error = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setColor(`${embed.maincolor}`)
                .setFooter(`${embed.footer}`)
                .setDescription(`${emoji.error} | Der Ideen Channel wurde nicht gesetzt.`)
            message.reply(
                error
            )
            return
        }

        const targetMessage = await channel.messages.fetch(messageId, false, true)
        if (!targetMessage) {
            let error = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setColor(`${embed.maincolor}`)
                .setFooter(`${embed.footer}`)
                .setDescription(`${emoji.error} | Bitte gebe eine gültige Nachricht an.`)
            message.reply(
                error
            )
            return
        }

        const oldEmbed = targetMessage.embeds[0]

        const embed1 = new Discord.MessageEmbed()
            .setAuthor(oldEmbed.author.name, oldEmbed.author.iconURL)
            .setDescription(oldEmbed.description)
            .setColor(newStatus.color)
            .setFooter('Du willst eine Idee abgeben? Schreib sie hier rein')

        if (oldEmbed.fields.length === 2) {
            embed1.addFields(oldEmbed.fields[0], {
                name: 'Status',
                value: `${newStatus.text}${reason ? ` Grund: ${reason}` : ''}`,
            })
        } else {
            embed1.addFields({
                name: 'Status',
                value: `${newStatus.text}${reason ? ` Grund: ${reason}` : ''}`,
            })
        }

        await targetMessage.edit(embed1)
    }
}

