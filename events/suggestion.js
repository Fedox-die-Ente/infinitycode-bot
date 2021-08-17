const Discord = require('discord.js')
const embed = require('../embed.json')
const emoji = require('../emoji.json')

const suggestionSchema = require('../schemas/suggestions-schema')

const statusMessages = {
    WARTEN: {
        text: '📊 Warte auf Communityfeedback, bitte votet!',
        color: 0xffea00,
    },
    AKZEPTIEREN: {
        text: '✅ Die Idee wurde akzeptiert.',
        color: 0x34eb5b,
    },
    ABLEHNEN: {
        text:
            '❌ Die Idee wurde abgelehnt.',
        color: 0xc20808,
    },
}

let suggestionCache = {} // { guildId: channelId }

const fetchSuggestionChannels = async (guildId) => {
    let query = {}

    if (guildId) {
        query._id = guildId
    }

    const results = await suggestionSchema.find(query)

    for (const result of results) {
        const {_id, channelId} = result
        suggestionCache[_id] = channelId
    }
}


module.exports = (client, message) => {
    fetchSuggestionChannels()

    client.on('message', (message) => {
        const {guild, channel, content, member} = message

        const cachedChannelId = suggestionCache[guild.id]
        if (cachedChannelId && cachedChannelId === channel.id && !member.user.bot) {
            message.delete()

            const status = statusMessages.WARTEN

            const embed = new Discord.MessageEmbed()
                .setColor(status.color)
                .setAuthor(member.displayName, member.user.displayAvatarURL())
                .setDescription(content)
                .addFields({
                    name: 'Status',
                    value: status.text,
                })
                .setFooter('Du willst eine Idee abgeben? Schreib sie hier rein')

            channel.send(embed).then((message) => {
                message.react('👍').then(() => {
                    message.react('👎')
                })
            })
        }
    })
}

module.exports.fetchSuggestionChannels = fetchSuggestionChannels

module.exports.statusMessages = statusMessages

module.exports.suggestionCache = () => {
    return suggestionCache
}


module.exports.config = {
    displayName: 'Suggestion',
    dbName: 'SUGGESTION',
    loadDBFirst: true
}