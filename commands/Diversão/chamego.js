const Discord = require('discord.js')
const superagent = require("superagent");

module.exports = {
   name: "chamego",
   aliases: ['pett'],
     run: async (client, message, args, guild) => {
   message.delete()

   var list = [
      'https://c.tenor.com/dbIbtIyByEwAAAAM/cuddle-anime.gif',
      'https://c.tenor.com/08vDStcjoGAAAAAd/cuddle-anime-hug-anime.gif',
      'https://i.pinimg.com/originals/d8/7c/5c/d87c5cdd0a68caf2b6feeec0f7da7315.gif',
    ];
    
    var rand = list[Math.floor(Math.random() * list.length)];

   let user = message.mentions.users.first()

    if(!user) {
        return message.channel.send(`${message.author}, Você tem que mencionar um membro para dar um chamego!`).then(message => message.delete({timeout: 20000}));
    }
if(user.id == message.author.id) return message.channel.send('Você não pode se dar um **chamego**!').then(message => message.delete({timeout: 20000}));


   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`**<@${user.id}> recebeu um chameguinho de <@${message.author.id}>!**:purple_heart:`)
      .setImage(rand)
      .setFooter('Clique em 🔁 para retribuir!', user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`:sparkling_heart: **${user.username} retribuiu o chamego de ${message.author.username}!**`, avatar1)
      .setFooter('💓 chameguinho', user.displayAvatarURL())
      .setImage(rand)

      await message.channel.send(embed).then(msg => { msg.delete({ timeout: 7500 })
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2).then(msg => msg.delete({timeout: 5000}))
         }
      })
   });
}}
