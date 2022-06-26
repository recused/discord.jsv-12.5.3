const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
   
            name: "warn",
            aliases: ['adv'],
        run: async (bot, message, args, guild) => {
            message.delete()
var warns = db.get(`warn${message.author.id}`)
  if(warns == null) warns = 0;
  
    let chx = db.get(`config_ban_${message.guild.id}`);
  if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Você precisa da permissão de `Gerenciar Cargos` para executar este comano",
    footer: (`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'})),
    color: "RANDOM"
  }}).then(msg => msg.delete({ timeout: 20000 }))
  
  let member = message.mentions.users.first() 
  if(!member) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Você deve mencionar um usuário a ser Avisado**",
    color: "RANDOM",
    footer: (`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
  }}).then(msg => msg.delete({ timeout: 20000 }))
  
  if(member.id === message.author.id) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Não podes dar warn em você mesmo**",
    color: "RANDOM",
    footer: (`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
  }}).then(msg => msg.delete({ timeout: 20000 }))
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Você precisa setar um motivo para avisar o usuario**",
    color: "RANDOM",
    footer: (`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
  }}).then(msg => msg.delete({ timeout: 20000 }))
  
  const aviso = new Discord.MessageEmbed()
  .addField("🔨 | Autor da Adv:", `\`${message.author.tag}\``)
   .addField("👤| Vítima da Adv:", `\`${member.tag}\``)
  .addField("📋 | Motivo:", `\`${motivo}\``)
  .addField("🔹  Id do usuário:", `\`${member.id}\``)

  .setFooter(`${member.tag} possui: ${warns} advertências`)
  .setColor("RANDOM")
   db.add(`warn${message.author.id}`, 1)
  message.channel.send(aviso).then(msg => msg.delete({ timeout: 20000 }))
  bot.channels.cache.get(chx).send(aviso);
  }
}