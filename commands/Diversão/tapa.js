const Discord = require('discord.js')
const superagent = require("superagent");

module.exports.run = async(bot, message, args ) => {
   message.delete()

   var list2 = [
      'https://c.tenor.com/CvBTA0GyrogAAAAC/anime-slap.gif',
      'https://c.tenor.com/AzIExqZBjNoAAAAC/anime-slap.gif',
      'https://c.tenor.com/GBShVmDnx9kAAAAC/anime-slap.gif',
      'https://i.imgur.com/fm49srQ.gif?noredirect',
    ]
    
    var rand2 = list2[Math.floor(Math.random() * list.length)];

   let user = message.mentions.users.first()

    if(!user) {
        return message.channel.send(`${message.author}, Você tem que mencionar um membro para dar um tapa!`).then(message => message.delete({timeout: 20000}));
    }
if(user.id == message.author.id) return message.channel.send('Você não pode se dar um **Tapa**!').then(message => message.delete({timeout: 20000}));


   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`**<@${message.author.id}> Deu um tapão em <@${user.id}>!**:purple_heart:`)
      .setImage(rand2)
      .setFooter('Clique em 🔁 para retribuir!', user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`:sparkling_heart: **${user.username} retribuiu o tapa de ${message.author.username}!**`, avatar1)
      .setFooter('Só tapa, só tapa de qualidade monstra', user.displayAvatarURL())
      .setImage(rand2)

   await message.channel.send(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2).then(msg => msg.delete({timeout: 5000}))
         }
      })
   });
}
