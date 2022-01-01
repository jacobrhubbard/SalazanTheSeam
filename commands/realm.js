const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('realm')
		.setDescription('The state of the realm'),
	async execute(interaction) {
		await interaction.reply({ content:`THE REALM OF ${interaction.guild.name.toUpperCase()} HAS ${interaction.guild.memberCount} SOULS TO CLAIM!`, ephemeral: true });
	},
};