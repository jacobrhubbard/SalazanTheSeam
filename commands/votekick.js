const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('votekick')
		.setDescription('Remove from the realm')
        .addUserOption(option => 
			option
				.setName('target')
				.setRequired(true)
				.setDescription('voting to ban')
			),
	async execute(interaction) {
		const target = interaction.options.getMember('target');
		await interaction.reply({ content:`BANNING ${target}` });
	},
};