const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name:"remove",
  aliases: ["rm"],
  run: async (client, message, args, guild) => {
      message.delete() 

      if(!message.guild.owner.id.includes(message.author.id)) {
        const embed1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`**<a:err_shine:838541524974305290> | ${message.author.tag} Apenas o ${message.guild.owner} tem permissão de utilizar este comando!**`)
        message.channel.send(embed1).then(msg => msg.delete({ timeout: 5000 })) 
    }

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("#008000")
    .setDescription(`**<a:certo_shine:838541503194071041> | Removido $${args[1]}**\n\n** <:aaa_pesquisa_cde:863073553594056715> Novo Balanceamento: ${bal}**`);
    message.channel.send(moneyEmbed).then(msg => msg.delete({ timeout: 20000 }))

}}
