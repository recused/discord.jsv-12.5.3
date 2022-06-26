const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
   
            name: "unmute",
            aliases: ['unmute'],
        run: async (bot, message, args, guild) => {
            message.delete()

        let chx = db.get(`config_ban_${message.guild.id}`);
            const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

            if(!Member) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> | Membro não econtrado!**",
    color: "RANDOM",
    footer: (`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'})),
  }}).then(msg => msg.delete({ timeout: 20000 }))

  
            var motivo = args.slice(1).join(" ");
    if (!motivo) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> |  Motivo inválido.**",
    color: "RANDOM",
    footer: (`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'})),
  }}).then(msg => msg.delete({ timeout: 20000 }))
    
  const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
  
            const embed = new Discord.MessageEmbed()
            .addFields({
                "name": `** 🔨 | Moderador:**`,
                "value": `\`${message.author.tag}\``,
                inline: true
            },
            {
                "name": `**:bust_in_silhouette: | Membro Desmutado:**`,
                "value": `\`${Member.displayName}\``,
                inline: true
            },
            {
                "name": `**📋 | Motivo:**`,
                "value": `\`${motivo}\``,
                inline: false
            },
            {
                "name": `**🔹 | Id do Usuário:**`,
                "value": `\`${Member.id}\``,
                inline: false

            }
            
            )
            .setColor("RANDOM")
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))     
            await Member.roles.remove(role)
    
            message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
            bot.channels.cache.get(chx).send(embed);
        }
}