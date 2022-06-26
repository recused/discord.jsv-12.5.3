const Discord = require('discord.js')
const db = require('quick.db')
const config = require('../../config.json')

module.exports = {
  name:"store",
  aliases: ["store"],
 run: async (client, message, args, guild) => {
     message.delete()   

    let embed = new Discord.MessageEmbed()
    .setDescription(`**<:lista:833088046064861214> VIP Ranks**\n\nBronze: 3500 Coins [${config.prefix}buy bronze]\n\n**<:lista:833088046064861214>Lifestyle Items**\n\nNike: 600 [${config.prefix}buy nike]\nCarro: 800 [${config.prefix}buy carro]\nMansão: 1200 [${config.prefix}buy mansão]`)
    .setColor("RANDOM")
    message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
}}