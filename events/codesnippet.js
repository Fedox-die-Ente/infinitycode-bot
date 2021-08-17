const Discord = require("discord.js");
const embed = require("../embed.json");
const emoji = require("../emoji.json");
module.exports = (client, instance) => {
    client.on('message', (message) => {
        if (message.channel.id === '875665999985254420') {
            if (message.content.includes('[Snippet]')) {
                const getmessage = message.content
                //console.log(getmessage)
                const text = getmessage.replace('[Snippet]', `Snippet von <@${message.author.id}>`);
                message.delete()
                const snippet = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
                    .setColor(`${embed.maincolor}`)
                    .setFooter(`${embed.footer}`)
                    .setDescription(`${text}`)
                message.channel.send(snippet)
                const done1 = new Discord.MessageEmbed()
                    .setAuthor(`${embed.name}`, `${embed.logo}`)
                    .setColor(`${embed.maincolor}`)
                    .setFooter(`${embed.footer}`)
                    .setDescription(`${emoji.done} | <@${message.author.id}> dein Snippet wurde erfolgreich erstellt.`)
                message.channel.send(done1).then(msg => {
                    setTimeout(() => msg.delete(), 3000)
                })
            } else {
                if (message.author.bot) {
                    return
                } else {
                    const error1 = new Discord.MessageEmbed()
                        .setAuthor(`${embed.name}`, `${embed.logo}`)
                        .setColor(`${embed.maincolor}`)
                        .setFooter(`${embed.footer}`)
                        .setDescription(`${emoji.error} | <@${message.author.id}> dieser Chat ist nicht zum unterhalten.`)
                    message.channel.send(error1).then(msg => {
                        setTimeout(() => msg.delete(), 3000)
                    })
                    message.delete()
                }

            }

        }
    })
}

module.exports.config = {
    displayName: 'Code-Snippet',
    dbName: 'CODE SNIPPET',
    loadDBFirst: true
}