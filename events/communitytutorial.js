const Discord = require("discord.js");
const embed = require("../embed.json");
const emoji = require("../emoji.json");
module.exports = (client, instance) => {
    client.on('message', (message) => {
        if (message.author.bot) {
            return
        }
        if (message.channel.id === '875666113239863307') {
            if (message.content.includes('[Video]')) {
                let done = new Discord.MessageEmbed()
                    .setAuthor(`${embed.name}`, `${embed.logo}`)
                    .setFooter(`${embed.footer}`)
                    .setColor(`${embed.maincolor}`)
                    .setDescription(`${emoji.done} | Du hast dein Video erfolgreich vorgestellt.`)
                message.channel.send(done).then(msg => {
                    setTimeout(() => msg.delete(), 3000)
                })
            } else {
                if (message.author.bot) {
                    return
                }
                let error = new Discord.MessageEmbed()
                    .setAuthor(`${embed.name}`, `${embed.logo}`)
                    .setColor(`${embed.maincolor}`)
                    .setFooter(`${embed.footer}`)
                    .setDescription(`${emoji.error} | <@${message.author.id}> dieser Chat ist nicht zum unterhalten.`)
                message.channel.send(error).then(msg => {
                    setTimeout(() => msg.delete(), 3000)
                })
                message.delete()
            }
        }
    })
}
module.exports.config = {
    displayName: 'CommunityTutorial',
    dbName: 'COMMUNITY TUTORIAL',
    loadDBFirst: true
}