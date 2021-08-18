const Discord = require('discord.js')
const emoji = require('../../emoji.json')
const embed = require('../../embed.json')
const config = require('../../config.json')

function getCodeBlock(txt) {
    const match = /\`\`\`(\S*)\n?([^]*)\n?\`\`\`$/.exec(txt);
    if (!match) return {lang: null, code: txt};
    if (match[1] && !match[2]) return {lang: null, code: match[1]};
    return {lang: match[1], code: match[2]};
}

module.exports = {
    category: 'User',
    aliases: 'h',
    description: 'Hilfe Menü',
    ownerOnly: false,
    cooldown: '2s',
    callback: ({message}) => {
        const args = message.content.trim().split(/ +/g);
        const command = args[0].slice(config.prefix.length).toLowerCase(); // case INsensitive, without prefix
        if (args[0]) {
            const {guild} = message
            const text = args.join(" ")
            const testtext = getCodeBlock(`${text}`)

            console.log(testtext.lang)
        }

    },
}