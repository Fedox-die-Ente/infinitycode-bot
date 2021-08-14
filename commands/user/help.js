const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')

module.exports = {
    category: 'User',
    aliases: 'h',
    description: 'Hilfe Menü',
    ownerOnly: false,
    cooldown: '2s',
    callback: ({message}) => {
        const hilfe = new Discord.MessageEmbed()
            .setAuthor(`${embed.name}`, `${embed.logo}`)
            .setColor(embed.maincolor)
            .setFooter(embed.footer)
            .setDescription('» Der Prefix von Bot ist $')
            .addFields({
                    name: `${emoji.owner} Owner - (0)`,
                    value: `\`Keine Befehle erkannt\``
                },
                {
                    name: `${emoji.staff} Staff - (0)`,
                    value: `\`Keine Befehle erkannt\``
                },
                {
                    name: `${emoji.admin2} Administration - (0)`,
                    value: `\`Keine Befehle erkannt\``
                },
                {
                    name: `${emoji.moderation} Moderation - (0)`,
                    value: `\`Keine Befehle erkannt\``
                },
                {
                    name: `${emoji.economy} Economy - (0)`,
                    value: `\`Keine Befehle erkannt\``
                },
                {
                    name: `${emoji.misc} Misc - (0)`,
                    value: `\`Keine Befehle erkannt\``
                },
                {
                    name: `${emoji.fun} Fun - (0)`,
                    value: `\`Keine Befehle erkannt\``
                },
                {
                    name: `${emoji.musik} Music - (0)`,
                    value: `\`Keine Befehle erkannt\``
                },
                {
                    name: `${emoji.user} User - (1)`,
                    value: `\`help\``
                })
        message.channel.send(hilfe)
    }
}