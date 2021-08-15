const Discord = require('discord.js')
const embed = require('../embed.json')
const emoji = require('../emoji.json')


module.exports = (client, message) => {
    client.on('nitroBoost', (booster) => {
        const nitro = new Discord.MessageEmbed()
            .setAuthor(`${embed.name}`, `${embed.logo}`)
            .setColor(`${embed.maincolor}`)
            .setFooter(`${embed.footer}`)
            .setDescription(`${emoji.done} | ${booster} hat unseren Server geboostet. <3`)
        message.guild.channels.cache.get('875653006387998750').send(nitro)
    })
}

module.exports.config = {
    displayName: 'Nitro-Booster',
    dbName: 'NITRO BOOSTER',
    loadDBFirst: true
}