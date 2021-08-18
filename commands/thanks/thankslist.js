const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')
const thanksSchema = require('../../schemas/thanks-schema')
const disbut = require("discord-buttons");


module.exports = {
    category: 'thanks',
    aliases: 'dankeliste',
    description: 'Thanks List',
    ownerOnly: false,
    cooldown: '2s',
    callback: async ({message, args}) => {
        const target = message.mentions.users.first()
        if (!args[0]) {
            if (!target) {
                const error1 = new Discord.MessageEmbed()
                    .setAuthor(`${embed.name}`, `${embed.logo}`)
                    .setFooter(`${embed.footer}`)
                    .setColor(`${embed.maincolor}`)
                    .setDescription(`${emoji.error} | Bitte makiere einen User.`)
                message.reply(error1)
                return
            }
        } else if (args[0]) {
            if (target) {
                const {guild} = message
                const guildId = guild.id
                const targetId = target.id
                const authorId = message.author.id
                const now = new Date()

                // Increase how many thanks the target user has had
                const result = await thanksSchema.findOne(
                    {
                        userId: targetId,
                        guildId,
                    },
                    {
                        userId: targetId,
                        guildId,
                    },
                    {
                        upsert: true,
                        new: true,
                    }
                )

                const ergebins = thanksSchema.findOne(
                    {
                        _id: targetId
                    },
                    (err, received) => {

                    })

                const lol = await thanksSchema.findOne(
                    {
                        userId: targetId,
                        guildId,
                    },
                    {
                        userId: targetId,
                        guildId,
                        received: 1
                    },
                )

                const amount = lol.received
                console.log(amount)
                const done1 = new Discord.MessageEmbed()
                    .setAuthor(`${embed.name}`, `${embed.logo}`)
                    .setFooter(`${embed.footer}`)
                    .setColor(`${embed.maincolor}`)
                    .setDescription(`${emoji.done} | <@${targetId}> wurde ${amount} mal gedankt.`)
                message.reply(done1)
            }

        }
    }
}