const Discord = require("discord.js");

module.exports = {
name: 'embed',
aliases: ['say'],
run: async(client, message, args) => {    
  message.delete()  

		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Você não tem permissão!`)

		const fala = args.join(" ");
		if(!fala) return message.reply(`Você precisa digitar algo!`)

		let embed = new Discord.MessageEmbed()
		.setDescription(fala)
		.setColor("#000000")
		message.channel.send(embed)


	}
}