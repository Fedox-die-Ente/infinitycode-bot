const Discord = require("discord.js");
const embed = require("../embed.json");
const emoji = require("../emoji.json");
module.exports = (client, instance) => {
    client.on('message', (message) => {
        if (message.channel.id === '875666468631625810') {
            message.react('👍').then(() => {
                message.react('👎')
            })
        }
    })
}
module.exports.config = {
    displayName: 'ProjectIdea',
    dbName: 'PROJECT IDEA',
    loadDBFirst: true
}