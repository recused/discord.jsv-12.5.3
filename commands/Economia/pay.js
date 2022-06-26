const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
        
  name:"pay",
  aliases: [""],
  run: async (client, message, args, guild) => {
      message.delete()

  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`> <a:err_shine:838541524974305290> Mencione alguém para pagar`);

  if (!user) {
      return message.channel.send(embed1).then(embed1 => embed1.delete({timeout: 5000}))
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`> <a:err_shine:838541524974305290> Coloque um valor para pagar`);
  
  if (!args[1]) {
      return message.channel.send(embed2).then(embed2 => embed2.delete({timeout: 5000}))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`> <a:err_shine:838541524974305290> Você não pode pagar dinheiro negativo`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3).then(embed3 => embed3.delete({timeout: 5000}))
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`> <a:err_shine:838541524974305290> Você não tem tanto dinheiro`);

  if (member < args[1]) {
      return message.channel.send(embed4).then(embed4 => embed4.delete({timeout: 5000}))
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**<a:certo_shine:838541503194071041> |Você pagou ${user.user.username} | ${args[1]} coins**`);

  message.channel.send(embed5).then(embed5 => embed5.delete({timeout: 5000}))
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}}

