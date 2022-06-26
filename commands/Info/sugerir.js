const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
name: "sugerir",
aliases: ["suggest"],
run: async (client, message, args, guild) => {

let chx = db.get(`config_sug_${message.guild.id}`);

var mensagem = args.slice(0).join(" ") 
if(!mensagem) return message.reply(`escreve uma sugestão válida.`)


const embed = new Discord.MessageEmbed()
.setDescription(mensagem)
.setColor("RANDOM")
await client.channels.cache.get(chx).send(embed).then(embed => {
    embed.react("838541503194071041"), embed.react("838541524974305290")
})

}
}