const Discord = require('discord.js');
const cooldowns = {}
const ms = require("ms")

module.exports = {
        config: {
            name: "addrole",
            aliases: ['addcargo'],
        run: async (bot, message, args, guild) => {
            message.delete()

    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("<a:err_shine:838541524974305290> Não tem permissão para esse comando!")
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send("<a:err_shine:838541524974305290> Não tenho permissão administrativas!")

    let membro = message.mentions.users.first();
    if (!membro) return message.channel.send('<a:err_shine:838541524974305290> Para poder executar o comando, tem que mencionar um membro!')

    let role1 =
    message.guild.roles.cache.find(r => r.name == args[1]) ||
    message.guild.roles.cache.find(r => r.id == args[1]) ||
    message.mentions.roles.first() || 
    args.join(" ");
     
    var role = message.guild.roles.cache.find(r => r.name === args[1]) ||
    message.guild.roles.cache.find(r => r.id == args[1]) ||
    message.mentions.roles.first()

    if (!role) return message.channel.send(`<a:err_shine:838541524974305290> Esse cargo não existe nesse servidor.`) 

    if (!role1) return message.reply('<a:err_shine:838541524974305290> Para poder executar o comando, tem que mencionar um cargo!')

    const embed1 = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setDescription(`<a:verificado:855131109871714324> Cargo adicionado \n${membro} recebeu o cargo <@&${role1.id}>`)
        .setColor(`RANDOM`)
        .setTimestamp()

     message.guild.members.cache.get(membro.id).roles.add(role1);
   
    message.channel.send(embed1).then(msg => msg.delete({ timeout: 20000 }))
}}}