const Discord = require('discord.js');

module.exports = {
    name: 'listban',
            aliases: ['banlist'],
    run: async (bot, message, args, guild) => {
        message.delete()

	let banperm = new Discord.MessageEmbed()
		.setColor('#9400D3')
		.setAuthor(
			'Você não tem permissão de "banir membros" para poder ver a lista de banimentos.'
		);
	let baninfo = new Discord.MessageEmbed()
		.setColor('#9400D3')
		.setDescription(`Você quer receber a lista de bans? Reaja com <a:certo_shine:838541503194071041> para confirmar o envio.`)
		;
	let bansend = new Discord.MessageEmbed()
		.setColor('#9400D3')
		.setAuthor(
			'Eu enviei a lista de banimentos no seu privado. (Caso não receba nenhuma mensagem no privado significa que não tem ninguém banido, ou então seu privado está bloqueado.)'
		);
	let bancancel = new Discord.MessageEmbed()
		.setColor('#9400D3')
		.setDescription(`O envio foi cancelado.`);
	if (!message.member.hasPermission('SEND_MESSAGES'))
		return message.channel.send(banperm).then(msg => msg.delete({timeout: 5000}))
	try {
		let output = '';
		let i = 0;

		message.channel.send(baninfo).then(async msg => {
			await msg.react('838541503194071041');
			await msg.react('838541524974305290');
			const filtro = (reaction, user) =>
				['838541503194071041', '838541524974305290'].includes(reaction.emoji.id) &&
				user.id === message.author.id;
			const coletor = msg.createReactionCollector(filtro);

			coletor.on('collect', r => {
				switch (r.emoji.id) {
					case '838541503194071041':
						msg.reactions.removeAll;
						message.guild.fetchBans().then(async bans => {
							message.channel.send(bansend).then(msg => msg.delete({timeout: 5000}))
							bans.forEach(async ban => {
								i++;
								let bandm = new Discord.MessageEmbed()
									.setColor('RANDOM')
									.setAuthor(
										`Nome: ${ban.user.username}\nID: ${ban.user.id}\nBot: ${
											ban.user.bot
										}`
									);
								await message.author.send(bandm);
							});
						});
						break;
					case '838541524974305290':
						msg.reactions.removeAll;
						message.channel.send(bancancel).then(msg => msg.delete({timeout: 5000}));
						break;
				}
			});
		});
	} catch (err) {
		message.channel.send('Um erro aconteceu! \n' + err).catch();
	}
}}


