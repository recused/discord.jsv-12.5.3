const Discord = require("discord.js")

module.exports = {

    name: "sair",
    aliases: ["leave"],
    run: async (client, message, args, guild) => {
        message.delete()
        if(!message.guild.owner.id.includes(message.author.id)) {
            const embed1 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**<a:err_shine:838541524974305290> | Apenas o ${message.guild.owner} tem permissão de utilizar este comando!**`)
            .setFooter(`Comando requisitado por: ${message.author.username}`)
            message.channel.send(embed1).then(msg => msg.delete({ timeout: 5000 })) 
        }
         
    message.member.voice.channel.leave()
          if (!message.member.voice.channel) {
            message.channel.send(`** > <:x_cansada_CDO:862661251220897792> ${message.author} você não está em um canal de voz!**`).then(msg => msg.delete({ timeout: 5000 }))
        }
}}