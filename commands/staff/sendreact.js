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
    callback: ({message, args}) => {
        if (message.channel.id === '875650592234676264') {
            message.delete()
            const react = new Discord.MessageEmbed()
                .setColor(embed.maincolor)
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setDescription('Hey, du möchtest Hilfe auf unseren Server bekommen?\nBefolge bitte diese 4 Regeln.\n\n**1** » Nutze [Sourcebin](https://sourceb.in/) um deinen Code / Error hochzuladen. (Oder eine andere Seite) \n**2** » Erkläre bitte den Fehler richtig und sag bitte was der Code machen soll.\n**3** » Nutze den richtigen Channel für deine Frage.\n**4** » Wenn du Hilfe bekommen hast und es geht mache bitte "$danke (Helfer)" um den jenigen zu danken.\n\nKlicke unten auf die Knöpfe um Zugang zu den Coding Kanälen zu bekommen.')
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
        } else if (message.channel.id === '875652901589102603') {
            message.delete()
            const react2 = new Discord.MessageEmbed()
                .setColor(embed.maincolor)
                .setAuthor(`${embed.name}`, `${embed.logo}`)
                .setDescription('Klicke unten auf die Knöpfe um die verschiedenen Rollen zu bekommen.')
                .setFooter(`${embed.footer}`)
            //ADD
            const allnotes_ = new disbut.MessageButton()
                .setStyle('green')
                .setLabel('[+] » Alle Benachrichtigungen')
                .setID('allenotes+');
            const wichtigenotes_ = new disbut.MessageButton()
                .setStyle('green')
                .setLabel('[+] » Wichtige Benachrichtigungen')
                .setID('wichtigenotes+');
            const uploadnotes_ = new disbut.MessageButton()
                .setStyle('green')
                .setLabel('[+] » Upload Benachrichtigungen')
                .setID('uploadnotes+');

            //REMOVE
            const allnotes = new disbut.MessageButton()
                .setStyle('red')
                .setLabel('[-] » Alle Benachrichtigungen')
                .setID('allenotes-');
            const wichtigenotes = new disbut.MessageButton()
                .setStyle('red')
                .setLabel('[-] » Wichtige Benachrichtigungen')
                .setID('wichtigenotes-');
            const uploadnotes = new disbut.MessageButton()
                .setStyle('red')
                .setLabel('[-] » Upload Benachrichtigungen')
                .setID('uploadnotes-');

            const addrow = new disbut.MessageActionRow()
                .addComponents([allnotes_, wichtigenotes_, uploadnotes_]);
            const deleterow = new disbut.MessageActionRow()
                .addComponents([allnotes, wichtigenotes, uploadnotes]);

            message.channel.send({components: [addrow, deleterow], embed: react2})

            //message.reply(message.channel.id)
        }
    }
}

