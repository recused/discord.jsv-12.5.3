const config = require("../../config.json")
const Discord = require("discord.js")
let prefix = config.prefix

module.exports = async(client, message) => {
  const link = 'https://evolve.xyz';
  const botversao = 'Alpha v.2.2.4';

if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTimestamp()
    .setFooter(`• ${message.guild.name}` , message.guild.iconURL({dynamic : true}))
    .setDescription(`**Olá sou o bot exclusivo da ${message.guild.name} [ Desenvolvido Por ${link} ] \n Estou na Versao ${botversao}\n Meu Prefixo e [ ${prefix} ] **`)
    return message.channel.send(embed).then(embed => embed.delete({ timeout: 5000 }))
  }

	if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  if(!message.guild) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g)

  let cmd = args.shift().toLowerCase();
  if(cmd.length === 0) return;

  let command = client.commands.get(cmd)

  if(!command) command = client.commands.get(client.aliases.get(cmd));

  if(command) command.run(client, message, args)
}