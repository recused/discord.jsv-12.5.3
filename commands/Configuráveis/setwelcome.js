const Discord = require('discord.js')
const db = require('quick.db')
const config = require("../../config.json")
module.exports = {
            name: "setwelcome",
            aliases: ['setwelcome'],
     
        run: async (client, message, args, guild) => {
            message.delete({timeout: 20000 })

            let prefix = config.prefix;
if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`<a:err_shine:838541524974305290> **| ${message.author.tag}  você tem que ter a permissão de **MANAGE_ROLES** para usar esse comando!**`).then(msg => msg.delete({ timeout: 5000 }))

const embed = new Discord.MessageEmbed()
.setAuthor(`🌙 Painel de configuração registro Moony`, message.author.displayAvatarURL({dynamic: true}))
.setImage("https://media.discordapp.net/attachments/880128879719751730/881965752985468938/unknown.png")
.setDescription(`<:Purple_DireitaCDL:880368049461538846> **Para configurar o autorole : \`!setwelcome autorole @mencao/id\`**
<:Purple_DireitaCDL:880368049461538846> **Para configurar o canal para onde a mensagem vai ser enviada \`!setwelcome log #mencao no canal/id\`** `)
.setColor("#993399")
if(!args[0]) return message.channel.send(embed).then((mensagem) => mensagem.delete({ timeout: 20000})) 

  if (args[0] === 'autorole') {

            let cargo_enrolado = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
            if(!cargo_enrolado) return message.channel.send(`> <a:err_shine:838541524974305290> ${message.author.tag} Você deve escrever com \`!setwelcome autorole @cargo\`.`);
            db.set(`autorole_${message.guild.id}`, cargo_enrolado.id);

            let cargo_enrolado_config = db.get(`autorole_${message.guild.id}`, cargo_enrolado.id);

            message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} autorole setado para <@&${cargo_enrolado_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
        }
if (args[0] === 'log') {

    let cargo_logs = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
    if(!cargo_logs) {
        const embederro4 = new Discord.MessageEmbed()
    .setDescription("> <a:err_shine:838541524974305290> Comando mal escrito \n Como deve escrever \`m!configwelcome log #canal ou id\` ")
    .setColor(ff0000)
    .setFooter(`- comando requisitado por ${message.author.tag}`)
    return message.channel.send(embederro4).then(embederro4 => embederro4.delete({timeout: 10000}))
    }
    db.set(`welcomec_${message.guild.id}`, cargo_logs.id);

    let cargo_logs_config = db.get(`welcomec_${message.guild.id}`, cargo_logs.id);

    message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} canal de logs-welcome setado para <#${cargo_logs_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))

 if (args[0] === 'reset') {
			  db.delete(`welcomec_${message.guild.id}`);
       db.delete(`autorole_${message.guild.id}`)
			  
            message.channel.send(`<a:certo:867838833440456734> | ${message.author.tag} reset com sucesso.`)
        }

}}}