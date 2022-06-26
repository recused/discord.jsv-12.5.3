const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
            name: "logav",
            aliases: ['avgiflog'],
        run: async (bot, message, args) => {
            message.delete({ timeout: 0 })

        let channel = message.guild.channels.cache.get(args[0]) || message.mentions.channels.first()
        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            const embed = new Discord.MessageEmbed()
            .setColor('#000001')
            .setDescription(`${message.author} \n Você não possui permissão de \`Gerenciar Canais\` para executar esse comando!`)
                 return message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }))
            }
  
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")){
          const embed2 = new Discord.MessageEmbed()
          .setColor("#000001")
          .setDescription(`Eu não tenho permissão de \`Gerenciar Canais\` por favor set a permissão em mim e tente novamente`)
               return message.channel.send(embed2).then(msg => msg.delete({ timeout: 20000 }))
          }
            
          if(!channel) {
            const embed3 = new Discord.MessageEmbed()
            .setColor('#000001')
            .setDescription(`${message.author} \n Informe em qual canal deseja setar o canal de logs-avatar`)
                 return message.channel.send(embed3).then(msg => msg.delete({ timeout: 20000 }))
            }

            db.set(`avgiflog_${message.guild.id}`, channel.id)

            message.channel.send(`O canal de Avatar-logs foi setado em ${channel} com sucesso!`).then(msg => msg.delete({ timeout: 20000 }))
         

        }}