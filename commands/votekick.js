const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('smite')
		.setDescription('Remove from thy realm')
        .addUserOption(option => 
			option
				.setName('target')
				.setRequired(true)
				.setDescription('the one that shall die')
			),
	async execute(interaction) {
		const target = interaction.options.getMember('target');
		await interaction.reply({ content:`SMITING ${target}` });
		if(!target.kickable) {
			setTimeout( async () => {
				await interaction.editReply({ content:`${target} IS TO POWERFUL FOR ME!`});
			}, 2000);
		} else {
			target.kick("Salazan has smited you :)");
		}
	},
};