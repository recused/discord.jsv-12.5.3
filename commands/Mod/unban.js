const Discord = require('discord.js')
const db = require('quick.db');
module.exports = {
    name: "unban",
		aliases: ['desabanir'],
    run: async(client, message, args) => {

 if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embederro1 = new Discord.MessageEmbed()
    .setColor("000000")
    .setDescription(`> <a:err_shine:838541524974305290> Você precisa da permissão **BANIR MEMBROS** para utilizar este comando! `)
    return message.channel.send(embederro1).then(embederro1 => embederro1.delete({ timeout: 15000 }))
 }       

let chx = db.get(`config_unban_${message.guild.id}`);     
let usu = args[0];
let motivo = args[1]

         if (!usu) { const embederro2 = new Discord.MessageEmbed()
         .setColor("000000")
         .setDescription(`> <a:err_shine:838541524974305290> Use um id válido para desbanir alguém.`)
         .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}))
         return message.channel.send(embederro2).then(embederro2 => embederro2.delete({ timeout: 15000 }))
       }

       if (!motivo) {
        const embederro3 = new Discord.MessageEmbed()
        .setColor("000000")
             .setDescription(` > <a:err_shine:838541524974305290> Um motivo não foi indicado`)
             .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}))
             return message.channel.send(embederro3).then(embederro3 => embederro3.delete({ timeout: 15000 }))
    }

        message.guild.members.unban(usu);
         {
            const embederunban = new Discord.MessageEmbed()
            .setColor("000000")
            .setFooter(`Usuário desbanido por: ${message.author.tag} `, message.guild.iconURL({dynamic : true}))
                .setTitle("<a:ajuda:832259977791537232> Sistema de Logs - Moony:tm:")
            .setDescription(`> <:check:859068391607631912> O usuário <@${usu}> (\`${usu}\`) foi desbanido com sucesso! \n <:motivo:832211492652711936> Motivo do desbanimento \`${motivo}\``)
            message.channel.send(embederunban).then(embederunban => embederunban.delete({ timeout: 15000 }))
            client.channels.cache.get(chx).send(embederunban);
            if(!chx){
                const embederro7 = new Discord.MessageEmbed()
    .setColor("000000")
    .setDescription(`${message.author} Um canal não foi definido para log-punição ! \n Para aceder aos comandos de configuração do bot faça \`${config.prefix}help`)
    return message.channel.send(embederro7).then(embederro7 => embederro7.delete({ timeout: 15000 }))
            }
         }

       
    }
}