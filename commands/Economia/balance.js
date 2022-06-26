const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    
  name: "addmoney",
  name:"balance",
  aliases: ["bal"],
  run: async (client, message, args, guild) => {
     message.delete()   

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#020202")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**<a:V_CifraoTKF:887644427479289856> | Balanceamento de ${user}** \n<a:um:862662882596487168> Carteira: **${bal}**\n<a:dois:862662919144603720> Banco: **${bank}**`);
  message.channel.send(moneyEmbed).then(moneyEmbed => moneyEmbed.delete({timeout: 5000}))
}}

