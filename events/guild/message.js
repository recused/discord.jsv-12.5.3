

module.exports = async(message) => {
	
	const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
  if (!message.member.hasPermission("MANAGE_GUILD"))  
    await message.delete({timeout: 1000});
    const embed1 = new Discord.MessageEmbed()
    .setColor("ff0000")
    .setTimestamp(true)
    .setFooter(`• ${message.guild.name}` , message.guild.iconURL({dynamic : true}))
    .setDescription(`** > <a:err_shine:838541524974305290> Não são permitidos convites de outros servidores ${message.author.tag} **`)
    return message.channel.send(embed1)
  }
}