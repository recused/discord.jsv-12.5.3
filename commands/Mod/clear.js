const Discord = require("discord.js");
const { set } = require("quick.db");

module.exports = {
	name: 'clear', 
	aliases: ['limpar'],
	run: async(client, message, args) => {

  if (!message.member.permissions.has("MANAGE_MESSAGES")) {
    const embederro1 = new Discord.MessageEmbed()
    .setColor("000000")
    .setDescription(`> <a:err_shine:838541524974305290> Não tem permissão para usar esse comando.`)
    .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}))
    return message.channel.send(embederro1).then(embederro1 => embederro1.delete({ timeout: 15000 }))
  }

  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99) {
    const embederro2 = new Discord.MessageEmbed()
    .setColor("000000")
    .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}))
    .setDescription(`> <a:err_shine:838541524974305290> forneça um número de até **99 mensagens** a serem excluídas.`)
    return message.channel.send(embederro2).then(embederro2 => embederro2.delete({ timeout: 15000 }))
  }

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
 {
  const embederro = new Discord.MessageEmbed()
  .setColor("993399")
  .setDescription(`** :zap: Foram deletadas ${args[0]} mensagens.**`)
  .setFooter(`Comando requisitado por: ${message.author.username} `, message.author.displayAvatarURL({format: 'png'}))
  return message.channel.send(embederro).then(embederro => embederro.delete({ timeout: 15000 }))
} 
 }
}	