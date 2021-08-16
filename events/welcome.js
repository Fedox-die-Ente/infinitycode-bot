const Discord = require('discord.js')
const emoji = require('../emoji.json')
const embed = require('../embed.json')

module.exports = (client, instance) => {
    client.on("guildMemberAdd", (member) => {
        const {guild} = member

        const channel = guild.channels.cache.find(
            (channel) => channel.id === "875653247854059570"
        )

        if (!channel) {
            return
        }

        const welcome = new Discord.MessageEmbed()
            .setAuthor(`${embed.name}`, `${embed.logo}`)
            .setColor(`${embed.maincolor}`)
            .setFooter(`${embed.footer}`)
            .setDescription(`${emoji.welcome} | Willkommen auf InfinityCode, ${member} bitte lese die Regeln in <#875649118633078825>`)

        channel.send(welcome)
        channel.send(`${member}`).then(newMessage => newMessage.delete({timeout: 1000}));
        member.roles.add('875700126209933345')
    })
}

module.exports.config = {
    displayName: 'Welcome Message',

    dbName: 'WELCOME MESSAGE',

    loadDBFirst: true
}