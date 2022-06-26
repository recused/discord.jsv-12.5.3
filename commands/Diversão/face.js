
const Discord = require('discord.js')
const superagent = require("superagent");

module.exports = {
   name: "face",
   aliases: ['smug'],
     run: async (client, message, args, guild) => {
   message.delete()

   var list = [
    'https://i.pinimg.com/originals/a0/8b/fd/a08bfdf79ceb610a45b21e7fed24895d.gif',
    'https://c.tenor.com/LzUPgX7KmzsAAAAC/anime-smirk.gif',
    'https://64.media.tumblr.com/8e8164ba096f8bbcfd10233ad4d4a632/99c0165c2e40671f-92/s1280x1920/339332bc3053bd4288e316f60593ef02df50efaf.gifv',
  ];
  
  var rand = list[Math.floor(Math.random() * list.length)];


   let avatar = message.author.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`:purple_heart: ****${message.author.username}**** Smug`)
      .setImage(rand)
      .setFooter(`Comando requisitado ${message.author.username}`, avatar)

 await message.channel.send(embed).then(msg => msg.delete({timeout: 15000}))
   
}}
