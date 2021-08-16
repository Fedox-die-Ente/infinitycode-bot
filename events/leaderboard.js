const Discord = require('discord.js')
const embed = require('../embed.json')
const emoji = require('../emoji.json')
const thanksLeaderboardSchema = require('../schemas/thanks-leaderboard-schema')
const thanksSchema = require('../schemas/thanks-schema')

const fetchTopMembers = async (guildId) => {
    let text = ''

    const results = await thanksSchema
        .find({
            guildId,
        })
        .sort({
            received: -1,
        })
        .limit(10)

    for (let counter = 0; counter < results.length; ++counter) {
        const {userId, received = 0} = results[counter]

        text += `${counter + 1} » <@${userId}> wurde ${received} mal gedankt.\n`
    }


    text += '\nDies wird jede Minute geupdatet.'

    const done1 = new Discord.MessageEmbed()
        .setAuthor(`${embed.name}`, `${embed.logo}`)
        .setFooter(`${embed.footer}`)
        .setColor(`${embed.maincolor}`)
        .setDescription(`${text}`)

    return done1
}

const updateLeaderboard = async (client) => {
    const results = await thanksLeaderboardSchema.find({})

    for (const result of results) {
        const {channelId, _id: guildId} = result

        const guild = client.guilds.cache.get(guildId)
        if (guild) {
            const channel = guild.channels.cache.get(channelId)
            if (channel) {
                const messages = await channel.messages.fetch()
                const firstMessage = messages.first()

                const topMembers = await fetchTopMembers(guildId)

                if (firstMessage) {
                    firstMessage.edit(topMembers)
                } else {
                    channel.send(topMembers)
                }
            }
        }
    }

    setTimeout(() => {
        updateLeaderboard(client)
    }, 1000 * 60)
}

module.exports = async (client, message) => {
    updateLeaderboard(client)
}

module.exports.config = {
    displayName: 'Leaderboard',
    dbName: 'LEADERBOARD',
    loadDBFirst: true
}