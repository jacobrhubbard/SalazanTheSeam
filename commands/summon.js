const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('summon')
		.setDescription('Is he alive?'),
	async execute(interaction) {
		await interaction.reply({ content:'HOW DARE YOU SUMMON ME!', ephemeral: true });
	},
};