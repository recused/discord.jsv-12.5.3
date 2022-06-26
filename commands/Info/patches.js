const Discord = require("discord.js")
const config  = require("../../config.json")
const db = require('quick.db')

module.exports = {

    name: "patches",
    aliases: ['novidades'],
run: async (client, message, args, guild) => {
    message.delete() 

    let versao = "Beta 2.4.4"

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.tag} | Patches da versão ${versao}`, client.user.displayAvatarURL({format: 'png'}))
    .setDescription(`<:links:880800811549077604> **Ideias principais: **\n ** <:ponto:852545277217734676> Mudança do bot de host**\n **<:ponto:852545277217734676> Bot encontra-se na versão ${versao}**\n **<:ponto:852545277217734676> A Delta77 tornará-se pública**`)
    .addField("⠀⠀", `**<:book:843165338689470464> Listo abaixo as novidades no bot adicionado pelo o [Owner](https://steamcommunity.com/id/auto-kill/):**\n **<a:um:862662882596487168> Sugerir || Faz [${config.prefix}]suggest <ideia>** \n** <a:dois:862662919144603720> Evento || Faz [${config.prefix}]evento <tempo> <o tema> **\n **<a:tres:862662975265439754> Afk || Faz [${config.prefix}]afk <motivo>**\n`,)
    .setColor("000000")
    .setFooter(`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
    message.channel.send(embed).then(embed => embed.delete({timeout : 50000}))
}}