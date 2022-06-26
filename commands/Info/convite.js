const Discord = require("discord.js")
const config  = require("../../config.json")
const db = require('quick.db')

module.exports = {

    name: "convite",
    aliases: ['invite'],
run: async (client, message, args, guild) => {
    message.delete() 

    let discord = "https://discord.gg/ExtBxEqCRw"
    let prefix = config.prefix

const embed1 = new Discord.MessageEmbed()
.setFooter(`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
.setDescription(`**<a:alertaroxo:887275999266476042> Hey ${message.author} eu sou o/a ${client.user.tag} desenvolvido/a pela Delta77 **\n **Para adquirir seu bot entre em [${discord}]**\n**O meu prefixo atual é [${prefix}]**\n **O meu convite é [Clique Aqui](https://discord.com/oauth2/authorize?client_id=850031221487960094&scope=bot&permissions=8)**`)
.setColor("RANDOM")
message.channel.send(embed1).then(msg => msg.delete({timeout: 75000}))
}}