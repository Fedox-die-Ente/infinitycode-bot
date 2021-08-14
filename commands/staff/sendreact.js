const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')
const disbut = require("discord-buttons");


module.exports = {
    category: 'staff',
    aliases: 'h',
    description: 'Sende das Reaction Menü',
    ownerOnly: false,
    cooldown: '2s',
    callback: ({message}) => {
        const react = new Discord.MessageEmbed()
            .setColor(embed.maincolor)
            .setAuthor(`${embed.name}`, `${embed.logo}`)
            .setDescription('Drücke auf dem jeweiligen Knopf um die Rolle zu bekommen.')
            .setFooter(`${embed.footer}`)
        const seecoding = new disbut.MessageButton()
            .setStyle('green')
            .setLabel('[+] Coding Channel')
            .setID('coding+');
        const notseecoding = new disbut.MessageButton()
            .setStyle('red')
            .setLabel('[-] Coding Channel')
            .setID('coding-');

        const addrow = new disbut.MessageActionRow()
            .addComponents([seecoding, notseecoding]);

        message.channel.send({components: addrow, embed: react})
    }
}

