const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    
         name: "unboost",
         aliases: ['unboost'],
     run: async (bot, message, args) =>  {

    let channel = message.mentions.channels.first();
        message.delete({ timeout: 0})

      if (!message.member.hasPermission("MANAGE_CHANNELS")) {
          const embed = new Discord.MessageEmbed()
          .setColor('#000001')
          .setDescription(`${message.author} \n Você não possui permissão de \`Gerenciar Canais\` para executar esse comando!`)
               return message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }))
          }

      if (!message.guild.me.hasPermission("MENAGE_CHANNELS")){
        const embed2 = new Discord.MessageEmbed()
        .setColor("#000001")
        .setDescription(`Eu não tenho permissão de \`Gerenciar Canais\` por favor set a permissão em mim e tente novamente`)
             return message.channel.send(embed2).then(msg => msg.delete({ timeout: 20000 }))
        }
          
        if(!channel) {
          const embed3 = new Discord.MessageEmbed()
          .setColor('#000001')
          .setDescription(`${message.author} \n Informe em qual canal deseja setar o canal de logs-entrada-e-saida!`)
               return message.channel.send(embed3).then(msg => msg.delete({ timeout: 20000 }))
          }
          

        db.set(`unboost_${message.guild.id}`, channel.id)
        message.channel.send(`O canal de unboost foi setado em ${channel} com sucesso!`).then(msg => msg.delete({ timeout: 20000 }))

     }       
}