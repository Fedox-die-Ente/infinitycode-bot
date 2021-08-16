const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')
const thanksSchema = require('../../schemas/thanks-schema')
const disbut = require("discord-buttons");


module.exports = {
    category: 'thanks',
    aliases: 'danke',
    description: 'Danke jemanden',
    ownerOnly: false,
    cooldown: '2s',
    callback: async ({message, args}) => {
        const target = message.mentions.users.first()
        if (!target) {
            const error1 = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setFooter(`${embed.footer}`)
                .setColor(`${embed.maincolor}`)
                .setDescription(`${emoji.error} | Bitte makiere jemanden.`)
            message.reply(error1)
            return
        }

        const {guild} = message
        const guildId = guild.id
        const targetId = target.id
        const authorId = message.author.id
        const now = new Date()

        if (targetId === authorId) {
            const error2 = new Discord.MessageEmbed()
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setFooter(`${embed.footer}`)
                .setColor(`${embed.maincolor}`)
                .setDescription(`${emoji.error} | Du kannst dir nicht selbst danken.`)
            message.reply(error2)
            return
        }

        const authorData = await thanksSchema.findOne({
            userId: authorId,
            guildId,
        })

        if (authorData && authorData.lastGave) {
            const then = new Date(authorData.lastGave)

            const diff = now.getTime() - then.getTime()
            const diffHours = Math.round(diff / (1000 * 60 * 60))

            const hours = 24
            if (diffHours <= hours) {
                const error3 = new Discord.MessageEmbed()
                    .setAuthor(`${embed.name}`, `${embed.logo}`)
                    .setFooter(`${embed.footer}`)
                    .setColor(`${embed.maincolor}`)
                    .setDescription(`${emoji.error} | Du hast bereits jemanden in den letzten ${hours} Stunden gedankt.`)
                message.reply(error3)
                return
            }
        }

        // Update the "lastGave" property for the command sender
        await thanksSchema.findOneAndUpdate(
            {
                userId: authorId,
                guildId,
            },
            {
                userId: authorId,
                guildId,
                lastGave: now,
            },
            {
                upsert: true,
            }
        )

        // Increase how many thanks the target user has had
        const result = await thanksSchema.findOneAndUpdate(
            {
                userId: targetId,
                guildId,
            },
            {
                userId: targetId,
                guildId,
                $inc: {
                    received: 1,
                },
            },
            {
                upsert: true,
                new: true,
            }
        )

        const amount = result.received
        const done1 = new Discord.MessageEmbed()
            .setAuthor(`${embed.name}`, `${embed.logo}`)
            .setFooter(`${embed.footer}`)
            .setColor(`${embed.maincolor}`)
            .setDescription(`${emoji.done} | Du hast <@${targetId}> erfolgreich gedankt, ihn wurde nun ${amount} mal gedankt.`)
        message.reply(done1)
    }
}