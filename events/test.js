function getCodeBlock(txt) {
    const match = /^\`\`\`(\S*)\n?([^]*)\n?\`\`\`$/.exec(txt);
    if (!match) return {lang: null, code: txt};
    if (match[1] && !match[2]) return {lang: null, code: match[1]};
    return {lang: match[1], code: match[2]};
}

const Discord = require("discord.js");
const embed = require("../embed.json");
const emoji = require("../emoji.json");
module.exports = (client, args) => {
    client.on('message', (message) => {

    })
}

module.exports.config = {
    displayName: 'Test',
    dbName: 'TEST',
    loadDBFirst: true
}

