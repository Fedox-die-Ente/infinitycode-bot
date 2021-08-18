const Discord = require("discord.js");
const embed = require("../embed.json");
const emoji = require("../emoji.json");
const sourcebin = require("sourcebin")
const config = require("../config.json");

function getCodeBlock(txt) {
    const match = /\`\`\`(\S*)\n?([^]*)\n?\`\`\`$/.exec(txt);
    if (!match) return {lang: null, code: txt};
    if (match[1] && !match[2]) return {lang: null, code: match[1]};
    return {lang: match[1], code: match[2]};
}

module.exports = (client, instance) => {
    client.on('message', async (message) => {
        if (message.channel.id === '875667747806257172') {
            //console.log('Message')
            const args = message.content.trim().split(/ +/g);
            const command = args[0].slice(config.prefix.length).toLowerCase(); // case INsensitive, without prefix
            const {guild} = message
            const argsjoin = args.join(" ")
            const text = getCodeBlock(`${argsjoin}`)
            //console.log(text)
            if (!text.lang) {
                return
            } else if (text.lang) {
                message.delete()
                const bin = await sourcebin.create(
                    [
                        {
                            content: `${text.code}`,
                            language: 'Text',
                        },
                    ],
                    {
                        title: `Code von ${message.author.username}`,
                        description: 'Generiert von InfinityCode Bot',
                    },
                );
                let done = new Discord.MessageEmbed()
                    .setAuthor(`${embed.name}`, `${embed.logo}`)
                    .setFooter(`${embed.footer}`)
                    .setColor(`${embed.maincolor}`)
                    .setDescription(`${emoji.done} | Dein Code wurde auf Sourcebin hochgeladen, bitte lade ihn nächste mal selber hoch! ${bin.url}`)
                message.channel.send(done)
            }
        }
    })
}

module.exports.config = {
    displayName: 'CodeUpload',
    dbName: 'CODE UPLOAD',
    loadDBFirst: true
}