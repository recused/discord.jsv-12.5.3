const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
        
  name:"implorar",
  aliases: [""],
  run: async (client, message, args, guild) => {
      message.delete()

  let user = message.author;

  let timeout = 180000;
  let amount = 5;

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`**> <a:err_shine:838541524974305290> Você implorou recentemente \n Implore novamente em ${time}**`);
    message.channel.send(timeEmbed).then(timeEmbed => timeEmbed.delete({timeout: 5000}))
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#1dff22")
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**<a:certo_shine:838541503194071041> | Implorou e ganhou ${amount} R$.**`);
  message.channel.send(moneyEmbed).then(moneyEmbed => moneyEmbed.delete({timeout: 5000}))
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())


  }
}}


