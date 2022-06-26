const Discord = require('discord.js');
const ms = require("ms")
const db = require("quick.db")

module.exports = {
    name: 'evento',
    aliases: ['event'],

    run: async(client, message, args) => {

        let chx = db.get(`config_sug_${message.guild.id}`);

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
    description: "**<a:err_shine:838541524974305290> Desculpe, mas você não tem permissão para isso.**",
    color: "RANDOM"
  }}).then(msg => msg.delete({ timeout: 20000 }))

        let time = args[0]
        if(!time) return message.channel.send(`${message.author} Por favor define um tempo !`)
        let lembrete = args.slice(1).join(" ")
        if(!lembrete) return message.channel.send(` ${message.author} Porfavor define um evento !`)

        const seliga = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setColor('000000') 
        .addField(`O Evento será de:`, `\`${lembrete}\``, false)
        .addField("Daqui a", `\`${time}\` tempo !`, false) 
        .setTimestamp(Date.now() + ms(time))
        .setFooter(`Comando requisitado por: ${message.author.username} `, message.author.displayAvatarURL({format: 'png'}))
        message.channel.send(seliga)
        client.channels.cache.get(chx).send(seliga)

        setTimeout(() => {
            let cofoe = new Discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`O evento acabou de começar ! \n Divirtam-se @everyone`)
            .setColor("RANDOM")
            .addField("Duração", `\`${time}\``, true)
            .addField(`\nLembrete:`, `\`${lembrete}\``, true)
            .setFooter(`Comando requisitado por: ${message.author.username}`, message.author.displayAvatarURL({format: 'png'}))
            message.channel.send(cofoe)
        }, ms(time))
    }
}