module.exports = (client, instance) => {
    //CODING CHANNEL
    client.on('clickButton', async (button) => {
        if (button.id === 'coding+') {
            await button.reply.defer()
            button.clicker.member.roles.add('876164875750105128')
            button.channel.send(`${button.clicker.member}, Du siehst nun die Coding Channel.`).then(newMessage => newMessage.delete({timeout: 5000}));
        }
    })

    client.on('clickButton', async (button) => {
        if (button.id === 'coding-') {
            await button.reply.defer()
            button.clicker.member.roles.remove('876164875750105128')
            button.channel.send(`${button.clicker.member}, Du siehst nun nicht mehr die Coding Channel.`).then(newMessage => newMessage.delete({timeout: 5000}));
        }
    })

    //REACTION ROLES

    //ADD
    client.on('clickButton', async (button) => {
        if (button.id === 'allenotes+') {
            await button.reply.defer()
            button.clicker.member.roles.add('876390553900687391')
            button.channel.send(`${button.clicker.member}, Du kriegst nun Alle Benachrichtigungen.`).then(newMessage => newMessage.delete({timeout: 5000}));
        }
    })

    client.on('clickButton', async (button) => {
        if (button.id === 'wichtigenotes+') {
            await button.reply.defer()
            button.clicker.member.roles.add('876390610813222932')
            button.channel.send(`${button.clicker.member}, Du kriegst nun wichtige Benachrichtigungen.`).then(newMessage => newMessage.delete({timeout: 5000}));
        }
    })

    client.on('clickButton', async (button) => {
        if (button.id === 'uploadnotes+') {
            await button.reply.defer()
            button.clicker.member.roles.add('876390654811443260')
            button.channel.send(`${button.clicker.member}, Du kriegst nun Upload Benachrichtigungen.`).then(newMessage => newMessage.delete({timeout: 5000}));
        }
    })

    //REMOVE
    client.on('clickButton', async (button) => {
        if (button.id === 'allenotes-') {
            await button.reply.defer()
            button.clicker.member.roles.remove('876390553900687391')
            button.channel.send(`${button.clicker.member}, Du kriegst nun Alle Benachrichtigungen nicht mehr.`).then(newMessage => newMessage.delete({timeout: 5000}));
        }
    })

    client.on('clickButton', async (button) => {
        if (button.id === 'wichtigenotes-') {
            await button.reply.defer()
            button.clicker.member.roles.remove('876390610813222932')
            button.channel.send(`${button.clicker.member}, Du kriegst nun keine wichtigen Benachrichtigungen mehr.`).then(newMessage => newMessage.delete({timeout: 5000}));
        }
    })

    client.on('clickButton', async (button) => {
        if (button.id === 'uploadnotes-') {
            await button.reply.defer()
            button.clicker.member.roles.remove('876390654811443260')
            button.channel.send(`${button.clicker.member}, Du kriegst nun keine Upload Benachrichtigungen mehr.`).then(newMessage => newMessage.delete({timeout: 5000}));
        }
    })

}

module.exports.config = {
    displayName: 'React-Buttons',
    dbName: 'REACT BUTTONS',
    loadDBFirst: true
}