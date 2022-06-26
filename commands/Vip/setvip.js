const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
        
        name: "setvip",
        aliases: ["configvip"],
        run: async (client, message, args, guild) => {
            message.delete()

      if (!message.member.hasPermission("ADMINISTRATOR"))
       return message.channel.send({embed: {
    description: `> <a:err_shine:838541524974305290> Eu não posso responder seu comando, porque vc não tem permissão de \`ADMINISTRATOR\``,
    color: "FF0000"
      }}).then(msg => msg.delete({ timeout: 5000 }))
      
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

      if(!user) {
        message.channel.send({embed: {
          description: `> <a:err_shine:838541524974305290> ** Você precisa mencionar alguém!**`,
          color: "FF0000"
        }}).then(msg => msg.delete({ timeout: 5000 }))
        return;
    }
      
      const vip = db.get(`Vip_${message.guild.id}_${user.id}`)
  
      if(vip){
          message.channel.send({embed: {
            description: `> <a:err_shine:838541524974305290> ** Esse usuário já é um usuário Vip!**`,
            color: "FF0000"
          }}).then(msg => msg.delete({ timeout: 5000 }))
          return;
      }

      db.set(`Vip_${message.guild.id}_${user.id}`, true)
      
      const embed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setDescription(`<:setaamarela:874314219259052042> ${user} foi adicionado na lista de Vips com sucesso!`)
      .setFooter(`Sistema de VIPS - Moony™️`, client.user.avatarURL())
      message.channel.send(`${message.author}`, embed).then(msg => msg.delete({ timeout: 9000 }))
}
}