const Discord = require('discord.js')
const db = require('quick.db')
const config = require("../../config.json")

module.exports = {
    name: "setlog",
     run: async (bot, message, args, guild) => {
        message.delete({timeout: 20000 })

if (!message.member.hasPermission("MANAGE_SERVER")) {
    const embederro1 = new Discord.MessageEmbed()
    .setDescription("> <a:err_shine:838541524974305290> Não tem permissão para usar esse comando. \n Permissões necessárias \`MANAGE_SERVER\`")
    .setColor(ff0000)
    .setFooter(`- comando requisitado por ${message.author.tag}`)
    return message.channel.send(embederro1)
}

if(!message.guild.me.hasPermission("MANAGE_SERVER")) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Desculpe, mas eu não tenho permissão para isso. \n Set em mim a permissão de \`MANAGE_SERVER\`**",
    color: "RANDOM"
  }}).then(msg => msg.delete({ timeout: 20000 }))

const embed = new Discord.MessageEmbed()
.setAuthor(`🌙 Painel de configuração logs Moony`, message.author.displayAvatarURL({dynamic: true}))
.setImage(message.guild.iconURL({dynamic : true}))
.setDescription(` <a:1shine:880367796687609877> ** Logs Punições: | ${config.prefix}setlog ban #canal ou id**
<a:2shine:880367811904548894> **Logs Antiraiding: |  ${config.prefix}setlog antiraid #canal ou id**
<a:3shine:880367825481515018> ** Logs Unban:  |  ${config.prefix}setlog unban #canal ou id**
<a:4shine:880367840169971732> ** Logs Msg Deletada/Updated | ${config.prefix}setlog msg #canal ou id**
<a:5shine:880800720067104799> ** Canal de Sugestão ** | ** ${config.prefix}setlog sug #canal ou id **
<:checkrosa:874325041272205374> **Reset: | ${config.prefix}setlog reset para resetar as configlogs todas**`)
.setColor("#993399")
if(!args[0]) return message.channel.send(embed).then((mensagem) => mensagem.delete({ timeout: 200000}))

if (args[0] === 'ban') {

    let cargo_logs = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
    if(!cargo_logs) {
        const embederro2 = new Discord.MessageEmbed()
    .setDescription("> <a:err_shine:838541524974305290> Comando mal escrito \n Como deve escrever \`m!configlog ban #canal ou id\` ")
    .setColor(ff0000)
    .setFooter(`- comando requisitado por ${message.author.tag}`)
    return message.channel.send(embederro2).then(embederro2 => embederro2.delete({timeout: 10000}))
    }
    db.set(`config_ban_${message.guild.id}`, cargo_logs.id);

    let cargo_logs_config = db.get(`config_ban_${message.guild.id}`, cargo_logs.id);

    message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} canal de logs-ban setado para <#${cargo_logs_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
}

if (args[0] === 'unban') {

    let cargo_logs = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
    if(!cargo_logs) {
        const embederro5 = new Discord.MessageEmbed()
    .setDescription("> <a:err_shine:838541524974305290> Comando mal escrito \n Como deve escrever \`m!configlog unban #canal ou id\` ")
    .setColor(ff0000)
    .setFooter(`- comando requisitado por ${message.author.tag}`)
    return message.channel.send(embederro5).then(embederro5 => embederro5.delete({timeout: 10000}))
    }
    db.set(`config_unban_${message.guild.id}`, cargo_logs.id);

    let cargo_logs_config = db.get(`config_unban_${message.guild.id}`, cargo_logs.id);

    message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} canal de logs-unban setado para <#${cargo_logs_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
}

if (args[0] === 'antiraid') {

    let cargo_logs = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
    if(!cargo_logs) {
        const embederro3 = new Discord.MessageEmbed()
    .setDescription("> <a:err_shine:838541524974305290> Comando mal escrito \n Como deve escrever \`m!configlog antiraid #canal ou id\` ")
    .setColor(ff0000)
    .setFooter(`- comando requisitado por ${message.author.tag}`)
    return message.channel.send(embederro3).then(embederro3 => embederro3.delete({timeout: 10000}))
    }
    db.set(`config_antiraiding_${message.guild.id}`, cargo_logs.id);

    let cargo_logs_config = db.get(`config_antiraiding_${message.guild.id}`, cargo_logs.id);

    message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} canal de logs-antiraid setado para <#${cargo_logs_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))
}

if (args[0] === 'msg') {

    let cargo_logs = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
    if(!cargo_logs) {
        const embederro4 = new Discord.MessageEmbed()
    .setDescription(`> <a:err_shine:838541524974305290> Comando mal escrito \n Como deve escrever \`${config.prefix}setloglog msg #canal ou id\``)
    .setColor(ff0000)
    .setFooter(`- comando requisitado por ${message.author.tag}`)
    return message.channel.send(embederro4).then(embederro4 => embederro4.delete({timeout: 10000}))
    }
    db.set(`config_msg_${message.guild.id}`, cargo_logs.id);

    let cargo_logs_config = db.get(`config_msg_${message.guild.id}`, cargo_logs.id);

    message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} canal de logs-msg setado para <#${cargo_logs_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))


     if(args[0] === 'sug') {

        let cargo_logs = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
        if(!cargo_logs) {
            const embederro5 = new Discord.MessageEmbed()
        .setDescription(`> <a:err_shine:838541524974305290> Comando mal escrito \n Como deve escrever \`${config.prefix}setloglog sug #canal ou id\``)
        .setColor(ff0000)
        .setFooter(`comando requisitado por ${message.author.tag}`)
        return message.channel.send(embederro5).then(embederro5 => embederro5.delete({timeout: 10000}))
        }
        db.set(`config_sug_${message.guild.id}`, cargo_logs.id);
    
        let cargo_logs_config = db.get(`config_sug_${message.guild.id}`, cargo_logs.id);
    
        message.channel.send(`> <a:certo_shine:838541503194071041> | ${message.author} canal de logs sug setado para <#${cargo_logs_config}> com sucesso.`).then((mensagem) => mensagem.delete({ timeout: 5000}))


     if (args[0] === 'reset') {
			 db.delete(`config_ban_${message.guild.id}`)
       db.delete(`config_unban_${message.guild.id}`)
       db.delete(`config_antiraiding_${message.guild.id}`)
       db.delete(`config_msg_${message.guild.id}`)
			  
            message.channel.send(`<a:certo:867838833440456734> | ${message.author} reset com sucesso.`)
        }
               }
            }}}