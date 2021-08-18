const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')
const suggestionSchema = require('../../schemas/suggestions-schema')
const {fetchSuggestionChannels} = require('../../events/suggestion')


module.exports = {
    category: 'User',
    requiredRoles: '875685542434603059',
    aliases: 'h',
    description: 'Hilfe Menü',
    ownerOnly: false,
    cooldown: '2s',
    callback: async ({message}) => {
        const channel = message.mentions.channels.first() || message.channel

        const {
            guild: {id: guildId},
        } = message
        const {id: channelId} = channel

        await suggestionSchema.findOneAndUpdate(
            {
                _id: guildId,
            },
            {
                _id: guildId,
                channelId,
            },
            {
                upsert: true,
            }
        )
        let done = new Discord.MessageEmbed()
            .setAuthor(`${embed.name}`, `${embed.logo}`)
            .setColor(`${embed.maincolor}`)
            .setFooter(`${embed.footer}`)
            .setDescription(`${emoji.done} | Der Suggestion Channel wurde zu ${channel} gesetzt.`)
        message.reply(done)

        fetchSuggestionChannels(guildId)
    }
}

