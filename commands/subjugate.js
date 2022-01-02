const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('subjugate')
		.setDescription('Show them who is boss')
        .addUserOption(option => 
			option
				.setName('target')
				.setRequired(true)
				.setDescription('salazans new slave')
			),
	async execute(interaction) {
		const target = interaction.options.getMember('target');
		await interaction.reply({ content:`SUBJUGATING ${target}` });
		if(!target.member.hasPermission('MANAGE_NICKNAMES')) {
			setTimeout( async () => {
				await interaction.editReply({ content:`${target} IS TO POWERFUL FOR ME!`});
			}, 2000);
		} else {
			await target.setNickname('Slave of Salazan');	//target.guild.members.get(bot.user.id).setNickname('Slave of Salazan');
		}
	},
};