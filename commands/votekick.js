const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('Remove from the realm')
        .addUserOption(option => 
			option
				.setName('target')
				.setRequired(true)
				.setDescription('the target')
			),
	async execute(interaction) {
		const target = interaction.options.getMember('target');
		await interaction.reply({ content:`SMITING ${target}` });
		target.kick("Salazan has smited you :)");
	},
};