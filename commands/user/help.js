module.exports = {
    category: 'Test',
    description: 'Test Command',
    testOnly: true,
    callback: ({message}) => {
        message.reply("Pong!")
    }
}