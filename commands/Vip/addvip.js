const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
        name: "addvip",
        aliases: ["addvipc"],
        run: async (client, message, args, guild) => {
            message.delete()

    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("> <a:err_shine:838541524974305290> Não tem permissão para esse comando!").then(msg => msg.delete({ timeout: 5000 }))
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send("> <a:err_shine:838541524974305290> Não tenho permissão administrativas!").then(msg => msg.delete({ timeout: 5000 }))

    let membro = message.mentions.members.first() || await message.guild.members.cache.get(args[0])
    if (!membro) return message.channel.send('> <a:err_shine:838541524974305290> Para poder executar o comando, tem que mencionar um membro ou por id!').then(msg => msg.delete({ timeout: 5000 }))

    let cargo = await message.guild.roles.cache.get(db.get(`CargoVip_${message.guild.id}_${message.author.id}`))
    if (message.guild.members.cache.get(membro.id).roles.cache.has(cargo.id)) return message.channel.send(`> <a:err_shine:838541524974305290> ${membro} já possui seu cargo de vip!`).then(msg => msg.delete({timeout: 5000}))
message.guild.members.cache.get(membro.id).roles.add(cargo.id)


    const embed = new Discord.MessageEmbed()
        .setTitle("Gerenciamento de VIP | Moony™️")
        .addField(`<:setashine:842466115493691413> **Usuário**`, `${membro}`, true)
        .addField(`<:setashine:842466115493691413> **Represetante:**`, `${message.author}`, true)
        .addField(`<:SHicon_add:879075481490714705> **Tag adicionada:**`, `> ${cargo}`, false)
        .setColor(`#993399`)
       .setFooter(`Sistema de VIPS - Moony™️`, client.user.avatarURL())
    message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 }))
}
}