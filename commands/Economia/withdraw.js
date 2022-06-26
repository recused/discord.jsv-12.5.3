const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
    
  name:"withdraw",
  aliases: ["wd"],
  run: async (client, message, args, guild) => {
     message.delete() 
  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**> <a:err_shine:838541524974305290> | Você coletou todas as moedas do banco**`);
  message.channel.send(embed5).then(msg => msg.delete({timeout: 5000}))
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**> <a:err_shine:838541524974305290> | Especifique um valor**`);
  
  if (!args[0]) {
      return message.channel.send(embed2).then(msg => msg.delete({timeout: 5000}))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**> <a:err_shine:838541524974305290> | Você não pode coletar valor negativo**`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3).then(msg => msg.delete({timeout: 5000}))
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**> <a:err_shine:838541524974305290> |  Você não tem tanto dinheiro no banco**`);

  if (member2 < args[0]) {
      return message.channel.send(embed4).then(msg => msg.delete({timeout: 5000}))
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`** <a:certo_shine:838541503194071041> | Você retirou ${args[0]} R$ do seu banco**`);

  message.channel.send(embed5).then(msg => msg.deleted({timeout: 5000}))
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.add(`money_${message.guild.id}_${user.id}`, args[0])
  }
}}


