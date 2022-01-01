const { Message } = require("discord.js");

//Displays in console that event has been read
module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
    name: 'guildMemberAdd',
    execute(interaction) {
        console.log('New user added');
    },
};