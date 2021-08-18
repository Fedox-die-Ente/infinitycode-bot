const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')
const thanksLeaderboardSchema = require('../../schemas/thanks-leaderboard-schema')
const disbut = require("discord-buttons");


module.exports = {
    category: 'thanks',
    requiredRoles: '875685542434603059',
    aliases: 'dankeliste',
    description: 'Danke jemanden',
    ownerOnly: false,
    cooldown: '2s',
    callback: async ({message, args}) => {
        const {guild, channel} = message
        const guildId = guild.id
        const channelId = channel.id

        await thanksLeaderboardSchema.findOneAndUpdate(
            {
                _id: guildId,
                channelId,
            },
            {
                _id: guildId,
                channelId,
            },
            {
                upsert: true,
            }
        )

        message.reply('Das Leaderboard wurde gesetzt.').then((message) => {
            message.delete({
                timeout: 1000 * 5,
            })
        })
        message.delete()
    }
}

