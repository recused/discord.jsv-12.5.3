const Discord = require('discord.js')
const superagent = require("superagent");

module.exports = {
   name: "beijar",
   aliases: ['kiss'],
     run: async (client, message, args, guild) => {
   message.delete()


   var list = [
      'https://c.tenor.com/dJU8aKmPKAgAAAAd/anime-kiss.gif',
      'https://i.pinimg.com/originals/f7/e8/a4/f7e8a4abac5d9e64784bd97480863a19.gif',
      'https://media3.giphy.com/media/G3va31oEEnIkM/giphy.gif',
      'https://i.gifer.com/8Sbz.gif',
      'https://c.tenor.com/W571AcafidcAAAAC/anime-kissing.gif',
      'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
    
    'https://www.icegif.com/wp-content/uploads/anime-kiss-icegif-1.gif',
    ];
    
    var rand = list[Math.floor(Math.random() * list.length)];

    var list2 = [
      'https://c.tenor.com/CvBTA0GyrogAAAAC/anime-slap.gif',
      'https://c.tenor.com/AzIExqZBjNoAAAAC/anime-slap.gif',
      'https://c.tenor.com/GBShVmDnx9kAAAAC/anime-slap.gif',
      'https://i.imgur.com/fm49srQ.gif?noredirect',
    ]
    
    var rand2 = list2[Math.floor(Math.random() * list.length)];

    

   
   let user = message.mentions.users.first()

    if(!user) {
        return message.channel.send(`${message.author}, Você tem que mencionar um membro para beijar!`).then(message => message.delete({timeout: 20000}));
    }
if(user.id == message.author.id) return message.channel.send('Você não pode se **beijar**!').then(message => message.delete({timeout: 20000}));


   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`**<@${message.author.id}> roubou um beijo de <@${user.id}>!**:purple_heart:`)
      .setImage(rand)
      .setFooter('Clique em 🔁 para retribuir com um beijo, ou em 🤚 para retribuir com um tapa na cara.', user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`:sparkling_heart: **${user.username} retribuiu o beijo de ${message.author.username}!**`, avatar1)
      .setFooter('Beijo de língua', user.displayAvatarURL())
      .setImage(rand)
      
    const embed3 = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`:sparkling_heart: **${message.author} roubou um beijo de ${user.username} mas levou um tapa na cara!**`, avatar1)
      .setFooter(`Comando requisitado por ${message.author.username}`, user.displayAvatarURL())
      .setImage(rand2)

      await message.channel.send(embed).then(msg => { msg.delete({ timeout: 7500 })
      msg.react('🔁')
      msg.react('🤚')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return
         
         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2).then(msg => msg.delete({timeout: 5000}))
         }
         if (reaction.emoji.name === '🤚') {
           return message.channel.send(embed3).then(msg => msg.delete({timeout: 5000}))
         }
      })
   });
}}
