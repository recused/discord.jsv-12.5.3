const Discord = require('discord.js')
const superagent = require("superagent");

module.exports = {
   name: "abraço",
   aliases: ['hug'],
     run: async (client, message, args, guild) => {
   message.delete()

   var list = [
      'https://c.tenor.com/1T1B8HcWalQAAAAC/anime-hug.gif',
      'https://c.tenor.com/SPs0Rpt7HAcAAAAM/chiya-urara.gif',
      'https://i.gifer.com/origin/b8/b814b05e2e14df35cd80a3cfb7aeece4.gif',
    ];
    
    var rand = list[Math.floor(Math.random() * list.length)];

   let user = message.mentions.users.first()

    if(!user) {
        return message.channel.send(`${message.author}, Você tem que mencionar um membro para abraçar!`).then(message => message.delete({timeout: 20000}));
    }
if(user.id == message.author.id) return message.channel.send('Você não pode se **Abraçar**!').then(message => message.delete({timeout: 20000}));


   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`**<@${user.id}> recebeu um abraço de <@${message.author.id}>!** :purple_heart:`)
      .setImage(rand)
      .setFooter('Clique em 🔁 para retribuir!', user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`:sparkling_heart: **${user.username} retribuiu o abraço de ${message.author.username}!**`, avatar1)
      .setFooter('Abraço de urso', user.displayAvatarURL())
      .setImage(rand)

   await message.channel.send(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2).then(msg => msg.delete({timeout: 15000}))
         }
      })
   });
}}

