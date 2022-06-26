const Discord = require("discord.js")
const db = require('quick.db');

module.exports = {
            name: "unlock",
            aliases: ['unlock'],
        run: async (client, message, args, guild) => {
            message.delete()
           
          let chx = db.get(`config_antiraiding_${message.guild.id}`)
  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "Motivo não Informado"
            if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        const embed1 = new Discord.MessageEmbed()
        .setDescription(`> <a:err_shine:838541524974305290> Você não tem permissão para usar este comando.`)
        return message.channel.send(embed1).then(embed1 => embed1.delete({ timeout: 15000 }))
      }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
    })
    const embed3 = new Discord.MessageEmbed()
    .setTitle('Destrancado')
    .setDescription(`** :unlock: | O Chat <#${message.channel.id}> foi destrancado com sucesso por: ${message.author.tag}**`)
    .setFooter(`Comando requisitado por ${message.author.tag}`, message.guild.iconURL({dynamic : true}))
    .setColor('#993399')
     message.channel.send(embed3)
  
}}