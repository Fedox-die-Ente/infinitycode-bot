module.exports = {
    slash: 'both', // Support both legacy and slash command syntax
    description: 'Displays your name and age', // Required for slash commands
    callback: ({message, args}) => {
        // Destructure the name and age from the args array
        const [name, age] = args

        // Create a string that is used in either command syntax
        const reply = `Hello my name is ${name} and I am ${age} years old.`

        // the "message" property will be falsey if this was executed
        // as a legacy command.
        if (message) {
            // "message" exists so we can simply reply
            message.reply(reply)
        }

        // The content to reply with must be returned from the callback function
        // This is required for slash commands exclusively
        // If this command is ran as a legacy command then this return
        // is ignored, however it is required to include if you use "both"
        // in case the command is ran as a slash command
        return reply
    }
}