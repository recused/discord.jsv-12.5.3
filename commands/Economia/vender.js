const Discord = require('discord.js')
const db = require('quick.db')
const config = require('../../config.json')

module.exports = {
    
    name: "vender",
    run: async (client, message, args, guild) => {
        message.delete()
    
    let user = message.author;

    const embed99 = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`**<:folder:833088069308907590> | Abaixo encontra os diferentes itens que pode vender**`)
    .addField(`**<:1shine:886636140201914368> | Nike**`, `**<:nike:886928019019677708> | ${config.prefix}vender nike**`, true)
    .addField(`**<:2shine:886636158099030056> | Carro**`, `**<:ferrari:886928797780295761> | ${config.prefix}vender car**`, true)
    .addField(`**<:3shine:886636176730116136> | Mansão**`, `**🏠 | ${config.prefix}vender mansão**`, false)
    message.channel.send(embed99).then(msg => msg.delete({timeout: 15000}))

    if(args[0] == 'nike') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`**> <a:err_shine:838541524974305290> | Você não tem ${args[0]} para vender**`);

        let nikeses = await db.fetch(`nikes_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2).then(msg => msg.delete({timeout: 5000}))
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`**> <a:err_shine:838541524974305290> | ${args[0]} foi vendido**`);

        db.add(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3).then(msg => msg.delete({timeout: 5000}))

    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`**> <a:err_shine:838541524974305290> |  Você não tem ${args[0]} para vender**`);

       let cars = await db.fetch(`carro_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2).then(msg => msg.delete({timeout: 5000}))
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.subtract(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#008000")
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`** <a:certo_shine:838541503194071041> | ${args[0]} foi vendido**`);

        db.add(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3).then(msg => msg.delete({timeout: 5000}))

    } else if(args[0] == 'mansão') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`Requisitado por: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`**> <a:err_shine:838541524974305290> | Você não tem ${args[0]} para vender**`);

        let houses = await db.fetch(`house_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2).then(msg => msg.delete({timeout: 5000}))
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.subtract(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#008000")
        .setDescription(`** <a:certo_shine:838541503194071041> |  ${args[0]} foi vendido**`);

        db.add(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3).then(msg => msg.delete({timeout: 5000}))
    };

}}
  
  