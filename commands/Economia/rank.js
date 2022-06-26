const Discord = require('discord.js')
const db = require('quick.db')
const config = require('./../../config.json')

module.exports = {
        
  name:"rank",
  aliases: ["leader"],
  run: async (client, message, args, guild) => {
      message.delete()

    const embed = new Discord.MessageEmbed()
    .setDescription(`** <:1shine:887629525205254194> | Coloque um item para mostrar o Ranking**\n **<:2shine:887629543551152138> | Rank de coins: ${config.prefix}rank coins**\n** <:3shine:887629557992149002> | Rank de Nikes: ${config.prefix}rank nike**\n** <:4shine:887629574601580565> | Rank De Carros: ${config.prefix}rank carro**\n**<:5shine:887629595157860392> | Rank de Mansões**: **${config.prefix}rank mansão**`)
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setColor("#FFFF00")


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'coins') {
    let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = bot.users.get(money[i].ID.split('_')[2]).username

      

        content += `${i+1}. ${user} ~ ${money[i].data}\n`
    
      }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**Rank de coins de ${message.guild.name}**\n\n${content}`)
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setColor("RANDOM")

    message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
  } else if(args[0] == 'nike') {
    let nike = db.startsWith(`nikes_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < nike.length; i++) {
        let user = bot.users.get(nike[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${nike[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**Rank de Nikes de ${message.guild.name}**\n\n${content}`)
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setColor("RANDOM")

    message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }))
  } else if(args[0] == 'carro') {
    let cars = db.startsWith(`car_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < cars.length; i++) {
        let user = bot.users.get(cars[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${cars[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**Rank de Carros de ${message.guild.name}**\n\n${content}`)
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setColor("RANDOM")
    message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }))
  } else if(args[0] == 'mansão') {
    let mansions = db.startsWith(`mansion_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < mansions.length; i++) {
        let user = bot.users.get(mansions[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${mansions[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**Rank de Mansões de${message.guild.name}**\n\n${content}`)
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setColor("RANDOM")

    message.channel.send(embed).then(msg => msg.delete({ timeout: 20000 }))
  }

}}
