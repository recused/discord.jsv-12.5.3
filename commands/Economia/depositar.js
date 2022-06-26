const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
        
  name: "depositar",
  aliases: ["dep"],
  run: async (client, message, args, guild) => {
      message.delete()

  if(!message.content.startsWith('!'))return;  

  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setDescription("> <a:err_shine:838541524974305290> Você não tem dinheiro para depositar")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.guild.id}_${user.id}`, money)
    db.subtract(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`> <a:err_shine:838541524974305290>Você já depositou todas suas moedas para o banco`);
  message.channel.send(embed5).then(embed5 => embed5.delete({timeout: 5000}))
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`> <a:err_shine:838541524974305290> Specifique um valor para depositar`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`> <a:err_shine:838541524974305290> Você não pode depositar dinheiro negativo`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3).then(embed3 => embed3.delete({timeout: 5000}))
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`> <a:err_shine:838541524974305290> Você não tem tanto dinheiro`);

  if (member < args[0]) {
      return message.channel.send(embed4).then(embed4 => embed4.delete({timeout: 5000}))
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#008000")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**<a:certo_shine:838541503194071041> | Você depositou ${args[0]} coins no seu banco**`);

  message.channel.send(embed5).then(embed5 => embed5.delete({timeout: 5000}))
  db.add(`bank_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
  }
}

}