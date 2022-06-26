const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
        
  name:"profile",
  aliases: ["pro"],
  run: async (client, message, args, guild) => {
      message.delete()

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`coins_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`banco
  _${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'

  let shoes = await db.fetch(`nike_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`carro_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`casa_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFF00")
  .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**<:1shine:886636140201914368> Perfil de ${user.tag}**\n\n<:setaamarela:874314219259052042>Carteira: ${money}\n<:setaamarela:874314219259052042>Banco: ${bank}\n<:setaamarela:874314219259052042> Rank VIP: ${vip}\n\n<:setaamarela:874314219259052042><:2shine:886636158099030056> **Inventário**\n\n<:setaamarela:874314219259052042>Nikes: ${shoes}\n<:setaamarela:874314219259052042>Carros: ${newcar}\n<:setaamarela:874314219259052042>Mansões: ${newhouse}`);
  message.channel.send(moneyEmbed).then(moneyEmbed => moneyEmbed.delete({timeout: 5000}))
}}
