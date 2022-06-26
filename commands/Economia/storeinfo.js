const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name:"storeinfo",
  aliases: ["si"],
 run: async (client, message, args, guild) => {
     message.delete()   
  
    if (args[0] == 'bronze') {
    
      let embed1 = new Discord.MessageEmbed()
      .setDescription("**Bronze Rank**\n\nBeneficíos: Chance de Ganhar mais dinheiro ao roubar alguém!")
      .setColor("#FFFFFF")
      message.channel.send(embed1).then(msg => msg.delete({timeout: 5000}))
    } else if(args[0] == 'nike') {
      let embed4 = new Discord.MessageEmbed()
      .setDescription("**Tênis da Nike**\n\nBeneficíos: Mais lento o tempo de ban/mute!")
      .setColor("#FFFFFF")
      message.channel.send(embed4).then(msg => msg.delete({timeout: 5000}))
    } else if(args[0] == 'carro') {
      let embed2 = new Discord.MessageEmbed()
      .setDescription("**Carro**\n\nBeneficíos: Mais fama!")
      .setColor("#FFFFFF")
      message.channel.send(embed2).then(msg => msg.delete({timeout: 5000}))
  } else if(args[0] == 'mansão') {
    let embed3 = new new Discord.MessageEmbed()
    .setDescription("**Mansão**\n\nBeneficíos: Não tem beneficíos :(")
    .setColor("#FFFFFF")
    message.channel.send(embed3).then(msg => msg.delete({timeout: 5000}))
  }

  }}

  
 